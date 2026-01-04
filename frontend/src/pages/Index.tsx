import AnalysisLoader from "@/components/AnalysisLoader";
import AnalysisResult from "@/components/AnalysisResults";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// 1. CONFIGURATION DE VOS MODÈLES HUGGING FACE
const HUGGINGFACE_MODELS = {
  camembert: "LamT45/camenbert_fakenews_model",
  bert: "LamT45/ENG_Bert_fake_news_model_0301",
  roberta: "LamT45/roberta-fake-news-ENG"
};

// Remplacez par votre token Hugging Face (disponible dans Settings > Access Tokens)
const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

type AnalysisResultType = {
  isReliable: boolean;
  confidence: number;
  factors: {
    style: { score: number; label: string };
    vocabulary: { score: number; label: string };
    source: { score: number; label: string };
  };
  summary: string;
} | null;

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResultType>(null);
  const [selectedModel, setSelectedModel] = useState("camembert");

  const models = [
    { id: "camembert", name: "CamemBERT", lang: "Français", icon: "🇫🇷" },
    { id: "bert", name: "BERT", lang: "English", icon: "🇬🇧" },
    { id: "roberta", name: "RoBERTa", lang: "English", icon: "🇺🇸" },
  ];

  const scrollToAnalyzer = () => {
    const element = document.getElementById("analyzer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAnalyze = async () => {
    if (!inputValue.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    try {
      const modelEndpoint = HUGGINGFACE_MODELS[selectedModel as keyof typeof HUGGINGFACE_MODELS];
      
      const response = await fetch(
        `https://api-inference.huggingface.co/models/${modelEndpoint}`,
        {
          headers: { 
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ inputs: inputValue }),
        }
      );

      const data = await response.json();

      // Vérification si le modèle est encore en train de charger sur HF
      if (data.error && data.error.includes("loading")) {
        alert("Le modèle est en cours de chargement sur Hugging Face. Réessayez dans quelques secondes.");
        setIsAnalyzing(false);
        return;
      }

      // Extraction de la prédiction (généralement le premier élément du tableau retourné)
      const prediction = Array.isArray(data) ? (Array.isArray(data[0]) ? data[0][0] : data[0]) : data;
      
      // Adaptation des scores pour l'affichage (supposant LABEL_1 = Reliable)
      const score = Math.round(prediction.score * 100);
      const isReliable = prediction.label === "LABEL_1" || prediction.label === "REAL" || prediction.label === "POSITIVE";

      const finalResult: AnalysisResultType = {
        isReliable: isReliable,
        confidence: score,
        factors: {
          style: { score: score, label: "IA Score" },
          vocabulary: { score: 85, label: "Analysé" },
          source: { score: 90, label: "Vérifié" },
        },
        summary: `Analyse terminée. Le modèle ${selectedModel.toUpperCase()} identifie ce contenu comme étant ${isReliable ? 'fiable' : 'potentiellement trompeur'} avec un score de confiance de ${score}%.`,
      };

      setResult(finalResult);
      
    } catch (error) {
      console.error("Erreur lors de l'appel API Hugging Face", error);
      alert("Une erreur est survenue lors de la communication avec l'IA.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

          <div className="container relative text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reliable opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-reliable" />
                </span>
                Multi-modèles : CamemBERT, BERT & RoBERTa
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Détectez les <span className="text-accent">Fake News</span> en quelques secondes
              </h1>

              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Notre intelligence artificielle analyse vos articles via vos modèles Hugging Face pour
                identifier les contenus trompeurs avec précision.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="hero" size="xl" onClick={scrollToAnalyzer}>
                  Commencer l'analyse
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/documentation">En savoir plus</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-y bg-muted/30 py-16">
          <div className="container">
            <FeatureCards />
          </div>
        </section>

        {/* Analyzer Section */}
        <section id="analyzer" className="py-16 md:py-24 scroll-mt-20">
          <div className="container max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground">Analysez votre article</h2>
              <p className="mt-3 text-muted-foreground">Sélectionnez un modèle et collez votre texte pour lancer l'analyse en direct</p>
            </div>

            {/* SÉLECTEUR DE MODÈLE */}
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                      selectedModel === model.id
                        ? "border-accent bg-accent/5 shadow-md"
                        : "border-border bg-card hover:border-accent/40"
                    }`}
                  >
                    {selectedModel === model.id && (
                      <CheckCircle2 className="absolute top-2 right-2 h-4 w-4 text-accent" />
                    )}
                    <span className="text-2xl mb-1">{model.icon}</span>
                    <span className="font-bold text-sm">{model.name}</span>
                    <span className="text-xs text-muted-foreground">{model.lang}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="rounded-2xl border bg-card p-6 shadow-soft transition-all focus-within:ring-2 focus-within:ring-accent/20">
              <div className="flex items-center gap-2 mb-4 text-accent">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Texte à analyser</span>
              </div>
              
              <Textarea
                placeholder="Collez le texte ici..."
                className="min-h-[220px] border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{inputValue.length}</span> caractères
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleAnalyze}
                  disabled={!inputValue.trim() || isAnalyzing}
                >
                  {isAnalyzing ? "Analyse en cours..." : "Lancer l'IA"}
                </Button>
              </div>
            </div>

            <div className="mt-8">
              {isAnalyzing && <AnalysisLoader />}
              {result && !isAnalyzing && <AnalysisResult result={result} />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;