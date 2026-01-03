import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Assure-toi que react-router-dom est installé
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/FeatureCards";
import AnalysisResult from "@/components/AnalysisResults";
import AnalysisLoader from "@/components/AnalysisLoader";

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

  // Fonction pour faire défiler jusqu'à la zone d'analyse
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const mockResults: AnalysisResultType[] = [
      {
        isReliable: true,
        confidence: 87,
        factors: {
          style: { score: 92, label: "Professionnel" },
          vocabulary: { score: 85, label: "Factuel" },
          source: { score: 84, label: "Établie" },
        },
        summary:
          "Cet article présente un style journalistique professionnel avec des sources citées et un vocabulaire factuel. Les marqueurs typiques de désinformation sont absents.",
      },
      {
        isReliable: false,
        confidence: 78,
        factors: {
          style: { score: 35, label: "Sensationnaliste" },
          vocabulary: { score: 28, label: "Émotionnel" },
          source: { score: 42, label: "Non vérifiée" },
        },
        summary:
          "L'article contient plusieurs indicateurs de contenu trompeur : titres sensationnalistes, vocabulaire chargé émotionnellement et sources non vérifiables.",
      },
    ];

    setResult(mockResults[Math.random() > 0.5 ? 0 : 1]);
    setIsAnalyzing(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "var(--gradient-hero)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reliable opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-reliable" />
                </span>
                Propulsé par BERT/RoBERTa
              </div>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Détectez les <span className="text-accent">Fake News</span> en quelques secondes
              </h1>

              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Notre intelligence artificielle analyse le style, le vocabulaire et la source de vos articles pour
                identifier les contenus trompeurs avec précision.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                {/* ACTION: Scroll vers l'analyseur */}
                <Button variant="hero" size="xl" onClick={scrollToAnalyzer}>
                  Commencer l'analyse
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                {/* ACTION: Lien vers la page à propos */}
                <Button variant="outline" size="xl" asChild>
                  <Link to="/comment-ca-marche">En savoir plus</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-y bg-muted/30 py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">Comment ça fonctionne</h2>
              <p className="mt-3 text-muted-foreground">
                Une analyse multi-dimensionnelle pour une détection fiable
              </p>
            </motion.div>
            <FeatureCards />
          </div>
        </section>

        {/* Analyzer Section */}
        <section id="analyzer" className="py-16 md:py-24 scroll-mt-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-8 text-center">
                <h2 className="font-display text-3xl font-bold text-foreground">Analysez votre article</h2>
                <p className="mt-3 text-muted-foreground">
                  Collez le texte de l'article pour lancer l'analyse
                </p>
              </div>

              {/* Petit indicateur de type (statique maintenant) */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex rounded-lg border bg-muted p-1">
                  <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-card text-foreground shadow-sm">
                    <FileText className="h-4 w-4" />
                    Contenu du texte
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <Textarea
                  placeholder="Collez le texte de l'article ici..."
                  className="min-h-[200px] border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    {inputValue.length} caractères
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleAnalyze}
                    disabled={!inputValue.trim() || isAnalyzing}
                  >
                    {isAnalyzing ? (
                      "Analyse en cours..."
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        Analyser
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Results Area */}
              <div className="mt-8">
                {isAnalyzing && <AnalysisLoader />}
                {result && !isAnalyzing && <AnalysisResult result={result} />}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-primary py-16 text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-3xl font-bold">Luttez contre la désinformation</h2>
              <p className="mt-4 text-primary-foreground/80">
                Rejoignez des milliers d'utilisateurs qui utilisent FactGuard pour vérifier leurs sources
                d'information et combattre les fake news.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                {/* ACTION: Scroll vers le haut (analyseur) */}
                <Button
                  variant="secondary"
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={scrollToAnalyzer}
                >
                  Commencer gratuitement
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/documentation">Voir la documentation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;