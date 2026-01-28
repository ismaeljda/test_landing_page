import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, X, Rocket } from "lucide-react";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      tagline: "Pour tester",
      features: [
        { name: "1 audit de landing page", included: true },
        { name: "Génération brand identity (1x)", included: true },
        { name: "Dashboard analytics (7 jours)", included: true },
        { name: "Optimisation continue", included: false },
        { name: "Support prioritaire", included: false },
      ],
      cta: "Commencer gratuitement",
      recommended: false,
    },
    {
      name: "Starter",
      price: isAnnual ? "79" : "99",
      tagline: "Pour les startups en croissance",
      features: [
        { name: "Audits illimités", included: true },
        { name: "Brand identity complète", included: true },
        { name: "Dashboard analytics complet", included: true },
        { name: "Recommandations actionnables", included: true },
        { name: "Tracking GA4 automatique", included: true },
        { name: "Export rapports (PDF/CSV)", included: true },
        { name: "Support email", included: true },
      ],
      cta: "Essayer 14 jours gratuits",
      recommended: true,
      badge: "Populaire",
    },
    {
      name: "Pro",
      price: isAnnual ? "239" : "299",
      tagline: "Pour scaler sérieusement",
      features: [
        { name: "Tout de Starter", included: true },
        { name: "Multi-projets (5 sites)", included: true },
        { name: "A/B testing intégré", included: true },
        { name: "White-label reports", included: true },
        { name: "API access", included: true },
        { name: "Support prioritaire + Slack", included: true },
      ],
      cta: "Parler à l'équipe",
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Un prix qui ne ruinera pas votre runway</h2>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Mensuel</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-gray-200 rounded-full relative p-1 transition-colors hover:bg-violet-200"
            >
              <motion.div 
                animate={{ x: isAnnual ? 24 : 0 }}
                className="w-6 h-6 bg-violet-600 rounded-full shadow-sm"
              />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Annuel</span>
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">-20%</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-[2.5rem] p-8 lg:p-10 border ${plan.recommended ? 'border-violet-600 shadow-2xl shadow-violet-200 lg:-mt-8 lg:mb-8 ring-4 ring-violet-50' : 'border-gray-100 shadow-lg'}`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-violet-200">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.tagline}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-500 ml-1">/mois</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${feature.included ? 'text-gray-700' : 'text-gray-300'}`}>
                    {feature.included ? (
                      <Check size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-200 mt-0.5 shrink-0" />
                    )}
                    <span className="text-base leading-tight">{feature.name}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.recommended ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-xl shadow-violet-200' : 'bg-gray-900 text-white hover:bg-black shadow-lg shadow-gray-200'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="bg-violet-50 px-8 py-6 rounded-3xl border border-violet-100 flex flex-col sm:flex-row items-center gap-6 max-w-3xl">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Rocket className="text-violet-600" size={32} />
            </div>
            <div>
              <p className="text-gray-900 font-bold text-lg mb-1">Économisez 99% sur vos frais marketing</p>
              <p className="text-gray-600 leading-relaxed">
                Une agence vous facturerait entre <span className="font-bold text-gray-900">10k€ et 30k€</span> pour le même résultat. Bloomyway automatise le process pour une fraction du prix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
