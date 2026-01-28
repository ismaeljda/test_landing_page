import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Play } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-50 rounded-full blur-3xl opacity-50 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">
              Pour les startups qui n'ont pas 10k€ à dépenser en agence
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Transformez votre marketing en <span className="text-violet-600">48 heures</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Audit de votre landing page, identité de marque, tracking analytics et optimisation. Tout automatisé. Moins de 100€/mois.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-violet-700 shadow-xl shadow-violet-200 transition-all flex items-center justify-center gap-2">
                Commencer gratuitement
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center gap-2 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-all">
                <Play size={20} fill="currentColor" />
                Voir la démo
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <ImageWithFallback 
                      src={`https://images.unsplash.com/photo-15${30+i}123456789-0?auto=format&fit=crop&q=80&w=100`} 
                      alt="User avatar" 
                    />
                  </div>
                ))}
                <div className="flex items-center pl-6 text-sm font-medium text-gray-600">
                  <div className="flex text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span>4.9/5 sur Product Hunt</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Aucune carte bancaire requise • 14 jours gratuits
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642132652809-8c6ab1971169?auto=format&fit=crop&q=80&w=1200"
                alt="Bloomyway Dashboard"
                className="w-full h-auto"
              />
              
              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Acquisition</p>
                    <p className="text-lg font-bold text-gray-900">+124%</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-violet-100 rounded-lg text-violet-600">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Conversion</p>
                    <p className="text-lg font-bold text-gray-900">8.4%</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-200 rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
