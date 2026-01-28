import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, Palette, BarChart3, Rocket, Layout } from "lucide-react";

export const DetailedFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);

  const detailedFeatures = [
    {
      id: 0,
      icon: <Search size={24} />,
      title: "Audit Landing Page",
      content: {
        points: [
          "Analyse SEO (meta tags, structure, images alt)",
          "Analyse Performance (Core Web Vitals, temps chargement)",
          "Analyse Design (contraste, hiérarchie, responsive)",
          "Analyse Contenu (lisibilité, mots-clés, CTAs)",
        ],
        image: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?auto=format&fit=crop&q=80&w=800",
      },
    },
    {
      id: 1,
      icon: <Palette size={24} />,
      title: "Brand Identity Generator",
      content: {
        points: [
          "Génération logo (plusieurs variantes)",
          "Palette de couleurs harmonieuse",
          "Typographie suggérée",
          "Brand guidelines exportables (PDF)",
        ],
        image: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=800",
      },
    },
    {
      id: 2,
      icon: <BarChart3 size={24} />,
      title: "Analytics Dashboard",
      content: {
        points: [
          "Connexion GA4 automatique",
          "Dashboard temps réel (sessions, conversions, sources)",
          "Funnel de conversion",
          "Objectifs trackés automatiquement",
        ],
        image: "https://images.unsplash.com/photo-1642132652809-8c6ab1971169?auto=format&fit=crop&q=80&w=800",
      },
    },
    {
      id: 3,
      icon: <Rocket size={24} />,
      title: "Optimisation & Recommandations",
      content: {
        points: [
          "Alertes intelligentes (baisse score, opportunité)",
          "Recommandations priorisées (impact estimé)",
          "A/B testing suggestions",
          "Benchmarking industrie",
        ],
        image: "https://images.unsplash.com/photo-1642132652809-8c6ab1971169?auto=format&fit=crop&q=80&w=800",
      },
    },
    {
      id: 4,
      icon: <Layout size={24} />,
      title: "Landing Page Regeneration",
      content: {
        points: [
          "Génération version optimisée de votre page",
          "Intégration tags tracking automatique",
          "Déploiement en 1 clic",
          "Design system cohérent avec votre marque",
        ],
        image: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?auto=format&fit=crop&q=80&w=800",
      },
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Tout ce dont vous avez besoin, vraiment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Détails de nos fonctionnalités conçues pour la croissance des startups.</p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {detailedFeatures.map((feature) => (
            <div 
              key={feature.id}
              className={`border rounded-3xl overflow-hidden transition-all duration-300 ${activeTab === feature.id ? 'border-violet-200 ring-4 ring-violet-50 shadow-lg' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <button
                onClick={() => setActiveTab(feature.id === activeTab ? -1 : feature.id)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${activeTab === feature.id ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-500'} transition-colors`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${activeTab === feature.id ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>

              <AnimatePresence>
                {activeTab === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 lg:p-8 lg:pt-0 grid lg:grid-cols-2 gap-8 border-t border-gray-50">
                      <div>
                        <ul className="space-y-4">
                          {feature.content.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="mt-1 w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                              </div>
                              <span className="text-gray-700 text-lg leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-10 text-violet-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          En savoir plus <ChevronDown className="-rotate-90" size={18} />
                        </button>
                      </div>
                      <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-video lg:aspect-square relative group">
                        <img 
                          src={feature.content.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                      </div>
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
};
