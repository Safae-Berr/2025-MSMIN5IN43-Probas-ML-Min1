import { motion } from "framer-motion";
import { ArrowLeft, Book, Code, Zap, Shield, AlertCircle, CheckCircle, Copy, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("getting-started");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copié dans le presse-papiers !");
  };

  const sections = [
    { id: "getting-started", label: "Démarrage rapide", icon: Zap },
    { id: "api", label: "API Reference", icon: Code },
    { id: "interpretation", label: "Interpréter les résultats", icon: Book },
    { id: "best-practices", label: "Bonnes pratiques", icon: Shield },
    { id: "faq", label: "FAQ", icon: AlertCircle },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-12 md:py-16">
          <div className="container">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">Documentation</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Tout ce que vous devez savoir pour utiliser FactGuard efficacement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
              {/* Sidebar */}
              <aside className="hidden lg:block">
                <nav className="sticky top-24 space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <section.icon className="h-4 w-4" />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <div className="max-w-3xl">
                {/* Getting Started */}
                <motion.section
                  id="getting-started"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-16"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground">Démarrage rapide</h2>
                  <div className="mt-6 space-y-6 text-muted-foreground">
                    <p>
                      FactGuard vous permet d'analyser la fiabilité d'un article en quelques étapes simples.
                    </p>

                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-foreground">1. Faire entrée du contenu</h3>
                      <p>
                        Vous pouvez  coller directement le <strong className="text-foreground">texte</strong> de l'article pour l'analyser
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-foreground">2. Soumettre pour analyse</h3>
                      <p>
                        Cliquez sur "Analyser" et patientez quelques secondes pendant que notre IA traite le contenu.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-foreground">3. Consulter les résultats</h3>
                      <p>
                        Vous recevrez un verdict global (fiable/trompeur), un score de confiance et une analyse détaillée des trois facteurs : style, vocabulaire et source.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* API Reference */}
                <motion.section id="api" className="mb-16">
                  <h2 className="font-display text-2xl font-bold text-foreground">API Reference</h2>
                  <div className="mt-6 space-y-6">
                    <p className="text-muted-foreground">
                      Intégrez FactGuard dans vos applications grâce à notre API REST.
                    </p>

                    <div className="rounded-xl border bg-card p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm">POST /api/v1/analyze</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("POST /api/v1/analyze")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto text-sm">
{`{
  "content": "Texte de l'article à analyser...",
  "url": "https://exemple.com/article", // optionnel
  "options": {
    "detailed": true,
    "language": "fr"
  }
}`}
                        </pre>
                      </div>

                      <h4 className="mt-6 font-semibold text-foreground">Réponse</h4>
                      <div className="mt-2 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto text-sm">
{`{
  "status": "success",
  "result": {
    "classification": "reliable" | "unreliable",
    "confidence": 0.87,
    "factors": {
      "style": { "score": 0.92, "label": "Professionnel" },
      "vocabulary": { "score": 0.85, "label": "Factuel" },
      "source": { "score": 0.84, "label": "Établie" }
    },
    "summary": "Description de l'analyse..."
  }
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-accent/20 bg-accent/5 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm text-muted-foreground">
                        L'API est actuellement en version bêta. <a href="mailto:api@factguard.app" className="text-accent underline">Contactez-nous</a> pour obtenir une clé d'accès.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Interpretation */}
                <motion.section id="interpretation" className="mb-16">
                  <h2 className="font-display text-2xl font-bold text-foreground">Interpréter les résultats</h2>
                  <div className="mt-6 space-y-6 text-muted-foreground">
                    <h3 className="font-display text-lg font-semibold text-foreground">Score de confiance</h3>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border border-reliable/20 bg-reliable-soft p-4">
                        <p className="font-semibold text-reliable">70-100%</p>
                        <p className="text-sm">Haute fiabilité</p>
                      </div>
                      <div className="rounded-lg border border-warning/20 bg-warning-soft p-4">
                        <p className="font-semibold text-warning">40-69%</p>
                        <p className="text-sm">Vérification recommandée</p>
                      </div>
                      <div className="rounded-lg border border-unreliable/20 bg-unreliable-soft p-4">
                        <p className="font-semibold text-unreliable">0-39%</p>
                        <p className="text-sm">Prudence requise</p>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground">Facteurs d'analyse</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-reliable" />
                        <div>
                          <strong className="text-foreground">Style :</strong> Évalue le professionnalisme et l'objectivité de l'écriture.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-reliable" />
                        <div>
                          <strong className="text-foreground">Vocabulaire :</strong> Détecte les marqueurs linguistiques de manipulation.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-reliable" />
                        <div>
                          <strong className="text-foreground">Source :</strong> Vérifie la crédibilité et la réputation de la source.
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.section>

                {/* Best Practices */}
                <motion.section id="best-practices" className="mb-16">
                  <h2 className="font-display text-2xl font-bold text-foreground">Bonnes pratiques</h2>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border bg-card p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground">✓ À faire</h3>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li>• Analysez l'article complet, pas seulement le titre</li>
                        <li>• Croisez les résultats avec d'autres sources</li>
                        <li>• Prenez en compte le contexte de publication</li>
                        <li>• Vérifiez la date de l'article</li>
                        <li>• Consultez les sources citées dans l'article</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground">✗ À éviter</h3>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li>• Se fier uniquement au score sans lire l'analyse</li>
                        <li>• Ignorer les nuances dans les résultats</li>
                        <li>• Considérer l'outil comme infaillible</li>
                        <li>• Partager des conclusions sans vérification</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* FAQ */}
                <motion.section id="faq" className="mb-16">
                  <h2 className="font-display text-2xl font-bold text-foreground">Questions fréquentes</h2>
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        q: "FactGuard est-il gratuit ?",
                        a: "Oui, l'utilisation de base est entièrement gratuite. Une API payante sera disponible pour les usages intensifs.",
                      },
                      {
                        q: "Quelles langues sont supportées ?",
                        a: "Actuellement, FactGuard supporte le français. L'anglais et d'autres langues seront ajoutés prochainement.",
                      },
                      {
                        q: "Mes données sont-elles conservées ?",
                        a: "Non. Les articles analysés ne sont pas stockés. Nous ne conservons aucune donnée personnelle.",
                      },
                      {
                        q: "Quelle est la précision du modèle ?",
                        a: "Notre modèle atteint une précision moyenne de 94% sur nos jeux de test. Cependant, aucun système n'est parfait.",
                      },
                      {
                        q: "Puis-je utiliser FactGuard pour mon média ?",
                        a: "Absolument ! Contactez-nous pour discuter d'une intégration personnalisée.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="rounded-xl border bg-card p-6">
                        <h3 className="font-semibold text-foreground">{faq.q}</h3>
                        <p className="mt-2 text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Help CTA */}
                <div className="rounded-xl border bg-accent/5 p-8 text-center">
                  <h3 className="font-display text-xl font-semibold text-foreground">Besoin d'aide ?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Notre équipe est disponible pour répondre à vos questions.
                  </p>
                  <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                      href="mailto:support@factguard.app"
                      className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      Contacter le support
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
