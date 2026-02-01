import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const questions = [
  {
    question: "Comment fonctionne la liste d'attente ?",
    answer: "Inscrivez-vous gratuitement pour être informé en priorité du lancement le 22 février 2026. Les 50 premiers inscrits bénéficieront d'un accès anticipé à la plateforme."
  },
  {
    question: "Quels outils dois-je avoir ?",
    answer: "Pour profiter pleinement de Bloumy, vous devez avoir un compte Google Analytics 4 et un compte Meta Ads (Facebook/Instagram) actifs avec au moins 30 jours d'historique."
  },
  {
    question: "Combien de temps dure l'audit ?",
    answer: "Une fois vos outils connectés, notre moteur d'analyse génère votre audit complet et votre plan d'action personnalisé en moins de 10 minutes."
  },
  {
    question: "Que se passe-t-il après le 22 février ?",
    answer: "Le 22 février, vous recevrez une invitation prioritaire pour accéder à votre tableau de bord. Vous pourrez alors lancer votre premier audit immédiatement."
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer: "Absolument. Bloumy est une solution sans engagement. Vous gardez le contrôle total sur vos données et votre abonnement."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center mb-16">
          Questions fréquentes
        </h2>
        
        <div className="divide-y divide-[#E5E7EB]">
          {questions.map((item, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left py-4 hover:bg-[#F9FAFB] px-4 rounded-xl transition-colors"
              >
                <span className="text-lg font-semibold text-[#1F2937]">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-[#8B5CF6]" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-[#8B5CF6]" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2 text-[#6B7280] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
