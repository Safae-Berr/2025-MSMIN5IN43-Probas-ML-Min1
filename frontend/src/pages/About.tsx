import { motion } from "framer-motion";
import { ArrowLeft, Shield, Users, Target, Award, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Intégrité",
      description: "Nous nous engageons à fournir des analyses objectives et transparentes, sans biais politique ou commercial.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous utilisons les dernières avancées en IA et NLP pour améliorer continuellement notre détection.",
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Notre outil est gratuit et accessible à tous, car la lutte contre la désinformation est l'affaire de chacun.",
    },
    {
      icon: Heart,
      title: "Éducation",
      description: "Au-delà de la détection, nous souhaitons éduquer le public aux mécanismes de la désinformation.",
    },
  ];

  const team = [
    {
      name: "Dr. Marie Laurent",
      role: "Directrice Scientifique",
      bio: "Experte en NLP avec 15 ans d'expérience, ancienne chercheuse au CNRS.",
    },
    {
      name: "Thomas Dubois",
      role: "Lead Developer IA",
      bio: "Spécialiste des transformers et du deep learning appliqué au texte.",
    },
    {
      name: "Sophie Martin",
      role: "Journaliste & Fact-checker",
      bio: "10 ans d'expérience en fact-checking, ancienne AFP Factuel.",
    },
    {
      name: "Alexandre Chen",
      role: "Data Scientist",
      bio: "Expert en analyse de données et en détection de patterns.",
    },
  ];

  const partners = [
    "AFP Factuel",
    "Les Décodeurs",
    "CheckNews",
    "CNRS",
    "Université Paris-Saclay",
    "CrossCheck",
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
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">À propos de FactGuard</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                FactGuard est né d'une conviction simple : dans un monde saturé d'informations, chaque citoyen devrait avoir accès à des outils pour distinguer le vrai du faux.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Notre mission est de démocratiser l'accès aux technologies de fact-checking en utilisant l'intelligence artificielle pour aider le public à naviguer dans le paysage médiatique moderne.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent">
                  <Target className="h-4 w-4" />
                  Notre mission
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-foreground">
                  Lutter contre la désinformation par la technologie
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    La désinformation représente aujourd'hui l'un des plus grands défis de notre société numérique. Elle affecte nos démocraties, notre santé publique et notre cohésion sociale.
                  </p>
                  <p>
                    Face à ce constat, nous avons décidé de mettre l'intelligence artificielle au service de la vérité. FactGuard combine les dernières avancées en traitement du langage naturel avec l'expertise de journalistes et fact-checkers professionnels.
                  </p>
                  <p>
                    Notre objectif n'est pas de remplacer le jugement humain, mais de l'augmenter. Nous fournissons des outils pour aider chacun à développer son esprit critique face à l'information.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="rounded-xl border bg-card p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">Notre équipe</h2>
              <p className="mt-3 text-muted-foreground">
                Des experts pluridisciplinaires unis par une même cause
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border bg-card p-6 text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-accent">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent">
                <Award className="h-4 w-4" />
                Nos partenaires
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-foreground">
                Ils nous font confiance
              </h2>
              <p className="mt-3 text-muted-foreground">
                FactGuard collabore avec des organisations de référence en fact-checking
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="rounded-lg border bg-card px-6 py-4 text-lg font-medium text-muted-foreground"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t bg-primary py-16 text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-display text-3xl font-bold">Vous souhaitez collaborer ?</h2>
              <p className="mt-4 text-primary-foreground/80">
                Médias, chercheurs, organisations : contactez-nous pour explorer les possibilités de partenariat.
              </p>
              <a
                href="mailto:contact@factguard.app"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-primary-foreground px-8 font-medium text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Nous contacter
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
