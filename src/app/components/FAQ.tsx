import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      q: "Est-ce que ça marche vraiment pour mon industrie ?",
      a: "Bloomyway fonctionne pour toute startup avec une landing page. Nous avons des clients en SaaS B2B, e-commerce, fintech, edtech, healthtech... L'audit et les recommandations sont personnalisés à votre site.",
    },
    {
      q: "Combien de temps ça prend vraiment ?",
      a: "L'onboarding prend 5 minutes. L'audit initial 30 secondes. La génération de brand identity 2-4 heures. Le setup complet GA4 24-48h. Vous pouvez commencer à voir des insights dès le premier jour.",
    },
    {
      q: "C'est quoi la différence avec Google Analytics seul ?",
      a: "GA4 est un outil puissant mais complexe. Bloomyway configure tout automatiquement, vous donne un dashboard simplifié avec les métriques qui comptent, et surtout vous donne des recommandations actionnables. GA4 vous montre les chiffres, Bloomyway vous dit quoi faire.",
    },
    {
      q: "Je peux annuler à tout moment ?",
      a: "Oui, 100%. Pas de contrat, pas d'engagement. Vous payez mois par mois et pouvez annuler en 2 clics depuis les paramètres. Vos données restent accessibles 30 jours après annulation.",
    },
    {
      q: "Vous avez accès à mes données GA4 ?",
      a: "Nous accédons uniquement aux données analytics que vous nous autorisez via OAuth (lecture seule). Nous ne touchons jamais à vos données utilisateurs sensibles. Tout est chiffré et conforme RGPD.",
    },
    {
      q: "Ça remplace une agence marketing ?",
      a: "Pour les startups early-stage (pré-seed à Serie A), oui. Bloomyway automatise ce qu'une agence facturerait 10-30k€. Si vous avez besoin de stratégie sur-mesure complexe ou de créa custom, une agence reste pertinente. Nous, on optimise les 80% répétitifs.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          <p className="text-xl text-gray-600">Tout ce que vous devez savoir pour commencer sereinement.</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? 'border-violet-200 bg-violet-50/30' : 'border-gray-100'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-900">{item.q}</span>
                <div className={`shrink-0 ml-4 p-1 rounded-full ${openIndex === i ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-lg text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-lg">
            Autre question ? <a href="#" className="text-violet-600 font-bold hover:underline">Contactez-nous</a>
          </p>
        </div>
      </div>
    </section>
  );
};
