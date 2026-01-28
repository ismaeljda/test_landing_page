import React from "react";
import { motion } from "motion/react";
import { X, AlertCircle, ArrowDown } from "lucide-react";

export const Problem = () => {
  const agencyPoints = [
    "10-30k€ pour un setup complet",
    "6-8 semaines de déploiement",
    "Réunions sans fin, process lourd",
    "Résultats non garantis",
    "Vendor lock-in, contrat 12 mois",
  ];

  const diyPoints = [
    "10+ outils différents à configurer",
    "Des semaines à apprendre et setup",
    "Bugs, erreurs, intégrations cassées",
    "Données éparpillées, pas de vue d'ensemble",
    "Burnout garanti",
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold mb-8"
        >
          Vous êtes bloqué entre deux options nulles
        </motion.h2>
        <p className="text-xl text-gray-400 mb-20 max-w-3xl mx-auto">
          Pourquoi les startups doivent-elles choisir entre se ruiner ou perdre un temps précieux ?
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Comparison Divider */}
          <div className="hidden lg:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-800 flex-col items-center justify-center">
            <div className="bg-gray-900 p-3 rounded-full border border-gray-800 text-gray-500 font-bold">VS</div>
          </div>

          {/* Agency */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-[2.5rem] border border-white/10 text-left"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500">
                <X size={28} />
              </div>
              <h3 className="text-2xl font-bold">Agence traditionnelle</h3>
            </div>
            <ul className="space-y-6">
              {agencyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-rose-500/50">
                    <AlertCircle size={20} />
                  </div>
                  <span className="text-gray-300 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DIY */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-[2.5rem] border border-white/10 text-left"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500">
                <X size={28} />
              </div>
              <h3 className="text-2xl font-bold">Tout faire soi-même</h3>
            </div>
            <ul className="space-y-6">
              {diyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-orange-500/50">
                    <AlertCircle size={20} />
                  </div>
                  <span className="text-gray-300 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <p className="text-xl font-medium text-violet-400 italic">Il existe une 3e voie</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-violet-400"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
