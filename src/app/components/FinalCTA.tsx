import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-rose-500 py-20 px-8 text-center"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
              Prêt à faire décoller votre marketing ?
            </h2>
            <p className="text-xl text-violet-100 mb-12 max-w-xl mx-auto">
              Rejoignez 500+ startups qui ont déjà sauté le pas et optimisé leur croissance.
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="bg-white text-violet-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-violet-50 transition-all flex items-center gap-2 shadow-2xl shadow-violet-900/40 transform hover:scale-105 active:scale-95">
                Commencer gratuitement
                <ArrowRight size={22} />
              </button>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-violet-600 bg-violet-100 overflow-hidden">
                      <ImageWithFallback 
                        src={`https://images.unsplash.com/photo-15${40+i}123456789-0?auto=format&fit=crop&q=80&w=100`} 
                        alt="User" 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white/90 font-medium">
                  Thomas, Marie et 498 autres ont rejoint cette semaine
                </p>
              </div>

              <p className="text-sm text-white/70">
                14 jours gratuits • Aucune CB requise • Setup en 5 min
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
