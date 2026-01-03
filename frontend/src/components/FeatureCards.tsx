import { motion } from "framer-motion";
import { Shield, Zap, Brain, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Avancée",
    description: "Modèles BERT/RoBERTa entraînés sur des milliers d'articles",
  },
  {
    icon: Zap,
    title: "Analyse Rapide",
    description: "Résultats en quelques secondes avec explication détaillée",
  },
  {
    icon: Shield,
    title: "Multi-Facteurs",
    description: "Évaluation du style, vocabulaire et fiabilité de la source",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Vos données ne sont jamais stockées ni partagées",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
            <feature.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{feature.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCards;
