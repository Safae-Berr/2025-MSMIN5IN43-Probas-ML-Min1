import { motion } from "framer-motion";
import { ArrowLeft, Brain, FileText, TrendingUp, Globe, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Soumission de l'article",
      description:
        "Vous collez le texte de l'article ou entrez son URL. Notre système extrait automatiquement le contenu textuel pour l'analyse.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Prétraitement NLP",
      description:
        "Le texte est nettoyé, tokenisé et transformé en embeddings via notre modèle BERT/RoBERTa pré-entraîné sur des millions d'articles.",
      icon: Brain,
    },
    {
      number: "03",
      title: "Analyse Multi-Facteurs",
      description:
        "Notre IA évalue simultanément le style d'écriture, le vocabulaire utilisé et la fiabilité de la source selon des critères établis.",
      icon: BarChart3,
    },
    {
      number: "04",
      title: "Classification & Score",
      description:
        "Le modèle produit un score de confiance et une classification (fiable/trompeur) avec une explication détaillée des facteurs analysés.",
      icon: CheckCircle,
    },
  ];

  const factors = [
    {
      icon: FileText,
      title: "Analyse du Style",
      description: "Évaluation du ton journalistique",
      details: [
        "Détection du sensationnalisme dans les titres",
        "Analyse de la structure narrative (pyramide inversée, etc.)",
        "Identification des techniques de manipulation émotionnelle",
        "Évaluation de l'objectivité et de l'équilibre du contenu",
        "Détection des généralisations abusives",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analyse du Vocabulaire",
      description: "Étude des marqueurs linguistiques",
      details: [
        "Détection des superlatifs excessifs ('incroyable', 'choquant')",
        "Identification du vocabulaire chargé émotionnellement",
        "Analyse des affirmations non sourcées",
        "Repérage des formulations vagues ou ambiguës",
        "Évaluation de la précision factuelle du langage",
      ],
    },
    {
      icon: Globe,
      title: "Analyse de la Source",
      description: "Vérification de la crédibilité",
      details: [
        "Vérification de l'existence et réputation du média",
        "Analyse de l'historique de publications",
        "Détection des sites de désinformation connus",
        "Évaluation de la transparence éditoriale",
        "Vérification des mentions légales et contacts",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-16 md:py-24">
          <div className="container">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
                Comment ça marche
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Découvrez la méthodologie scientifique derrière notre système de détection de fake news basé sur
                l'intelligence artificielle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">Le processus d'analyse</h2>
              <p className="mt-3 text-muted-foreground">
                De la soumission à la classification en 4 étapes
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-2xl border bg-card p-6">
                    <span className="font-display text-4xl font-bold text-accent/20">{step.number}</span>
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-border lg:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Factors */}
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">Les critères d'analyse</h2>
              <p className="mt-3 text-muted-foreground">
                Trois dimensions complémentaires pour une évaluation complète
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              {factors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border bg-card p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <factor.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{factor.title}</h3>
                  <p className="mt-2 text-muted-foreground">{factor.description}</p>

                  <ul className="mt-6 space-y-3">
                    {factor.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-reliable" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Info */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground">Notre modèle IA</h2>
                <div className="mt-8 space-y-6 text-muted-foreground">
                  <p>
                    FactGuard utilise une architecture basée sur <strong className="text-foreground">BERT (Bidirectional Encoder Representations from Transformers)</strong> et <strong className="text-foreground">RoBERTa</strong>, deux des modèles de traitement du langage naturel les plus avancés.
                  </p>
                  <p>
                    Notre modèle a été fine-tuné sur un corpus de plus de <strong className="text-foreground">500 000 articles</strong> en français, incluant des articles vérifiés par des fact-checkers professionnels et des contenus identifiés comme désinformation.
                  </p>
                  <p>
                    L'entraînement s'appuie sur des données provenant de sources reconnues comme <strong className="text-foreground">AFP Factuel</strong>, <strong className="text-foreground">Les Décodeurs (Le Monde)</strong>, <strong className="text-foreground">CheckNews (Libération)</strong> et d'autres organisations de fact-checking.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border bg-card p-6 text-center">
                    <p className="font-display text-3xl font-bold text-accent">500K+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Articles d'entraînement</p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 text-center">
                    <p className="font-display text-3xl font-bold text-accent">94%</p>
                    <p className="mt-1 text-sm text-muted-foreground">Précision moyenne</p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 text-center">
                    <p className="font-display text-3xl font-bold text-accent">&lt;3s</p>
                    <p className="mt-1 text-sm text-muted-foreground">Temps d'analyse</p>
                  </div>
                </div>
              </motion.div>

              {/* Warning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 flex items-start gap-4 rounded-xl border border-warning/20 bg-warning-soft p-6"
              >
                <AlertTriangle className="h-6 w-6 shrink-0 text-warning" />
                <div>
                  <h4 className="font-semibold text-foreground">Limites de l'outil</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Aucun système automatisé n'est parfait. FactGuard est un outil d'aide à la décision et ne remplace pas le jugement humain. Nous vous encourageons à toujours croiser les sources et à faire preuve d'esprit critique face à toute information.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
