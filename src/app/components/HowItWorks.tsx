import React from "react";
import { motion } from "motion/react";
import { Link2, Cpu, Zap, CheckCircle2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Link2 className="text-violet-600" size={24} />,
      title: "Connectez votre site",
      description: "Collez l'URL de votre landing page. On s'occupe du reste.",
      duration: "30 secondes",
      color: "bg-violet-100",
      delay: 0,
    },
    {
      number: "2",
      icon: <Cpu className="text-rose-500" size={24} />,
      title: "On analyse et génère",
      description: "Notre IA scanne votre page, génère votre brand identity, configure le tracking.",
      duration: "2-4 heures",
      color: "bg-rose-100",
      delay: 0.2,
    },
    {
      number: "3",
      icon: <Zap className="text-emerald-500" size={24} />,
      title: "Vous déployez et croissez",
      description: "Dashboard prêt, recommandations actionnables, tracking actif. Place à la croissance.",
      duration: "Immédiat",
      color: "bg-emerald-100",
      delay: 0.4,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            3 étapes, 48 heures, c'est fait
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pas de réunions interminables. Pas de cahier des charges de 50 pages. On va droit au but.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-200 via-rose-200 to-emerald-200 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-full ${step.color} border-4 border-white shadow-lg flex items-center justify-center relative z-10`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center font-bold text-gray-900 z-20">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-gray-300" />
                  <span className="text-sm font-semibold text-gray-500">Durée: {step.duration}</span>
                </div>

                {/* Micro-visual mock */}
                <div className="mt-8 w-full max-w-[240px] bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  {i === 0 && (
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3 text-[10px] text-gray-400">https://votre-site.com</div>
                      <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white"><CheckCircle2 size={16} /></div>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="w-20 h-2 bg-gray-100 rounded-full" />
                        <div className="text-[10px] text-rose-500 font-bold">85%</div>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-full bg-rose-500" 
                        />
                      </div>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="flex items-end gap-1 h-12">
                      {[30, 50, 40, 70, 60, 90, 85].map((h, j) => (
                        <motion.div 
                          key={j}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: j * 0.1 }}
                          className="flex-1 bg-emerald-500 rounded-t-sm"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="bg-rose-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-rose-600 shadow-xl shadow-rose-100 transition-all">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};
