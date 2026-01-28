import React from "react";
import { motion } from "motion/react";
import { Search, Palette, BarChart3, Rocket } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: <Search className="text-violet-600" size={32} />,
      title: "Audit Intelligent",
      description: "Analysez votre landing page (SEO, design, performance, contenu). Obtenez un rapport détaillé avec recommandations actionnables.",
      color: "bg-violet-100",
      delay: 0.1,
    },
    {
      icon: <Palette className="text-rose-500" size={32} />,
      title: "Brand Identity",
      description: "Logo, palette de couleurs, guidelines. Créés par IA, validés par vous. En quelques clics.",
      color: "bg-rose-100",
      delay: 0.2,
    },
    {
      icon: <BarChart3 className="text-emerald-500" size={32} />,
      title: "Analytics & Tracking",
      description: "Tags installés automatiquement, dashboard temps réel, métriques qui comptent. Zéro configuration manuelle.",
      color: "bg-emerald-100",
      delay: 0.3,
    },
    {
      icon: <Rocket className="text-blue-500" size={32} />,
      title: "Optimisation Continue",
      description: "Alertes intelligentes, opportunités détectées, A/B tests suggérés. Améliorez en continu.",
      color: "bg-blue-100",
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Le meilleur des deux mondes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce dont votre startup a besoin pour faire décoller son marketing, en un seul endroit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              whileHover={{ y: -10 }}
              className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-violet-100 transition-all group"
            >
              <div className={`${item.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {item.description}
              </p>
              
              {/* Fake UI preview */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 overflow-hidden relative h-32">
                <div className="flex gap-2 mb-3">
                  <div className="w-12 h-2 bg-gray-200 rounded-full" />
                  <div className="w-8 h-2 bg-gray-200 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full" />
                  <div className="w-3/4 h-1.5 bg-gray-200 rounded-full" />
                  <div className="w-1/2 h-1.5 bg-gray-200 rounded-full" />
                </div>
                {/* Decorative blobs for visual interest */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 rounded-full blur-xl opacity-20 ${item.color.replace('100', '400')}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
