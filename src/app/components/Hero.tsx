import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E8FF] text-[#8B5CF6] rounded-full text-sm font-medium">
            <span className="animate-pulse">🚀</span>
            Lancement le 22 février
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-[1.1]">
            Arrêtez de gaspiller votre budget marketing
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-xl">
            Bloumy analyse vos Google Analytics + Meta Ads en 48h et vous dit exactement quoi optimiser pour doubler vos conversions.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#10B981] font-medium text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Déjà 15 startups sur la liste d'attente
            </div>
            
            <button 
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg shadow-violet-200"
            >
              Rejoindre la liste d'attente
            </button>
            
            <p className="text-[11px] text-[#9CA3AF]">
              ⏱️ Lancement dans 21 jours · Aucune CB requise
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#8B5CF6]/10 rounded-3xl blur-2xl transition-all duration-300 group-hover:bg-[#8B5CF6]/20" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-white transform-gpu transition-transform duration-500 hover:scale-[1.02]">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1702047094974-a3475a6e37f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWFya2V0aW5nJTIwdGVhbSUyMHNtaWxpbmclMjBvZmZpY2UlMjBsYXB0b3AlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY5ODc3NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Marketing Team"
              className="w-full h-[400px] object-cover"
            />
            {/* Overlay indicators to simulate interaction */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-[#E5E7EB] max-w-[160px] hidden md:block animate-bounce">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[10px] font-bold text-[#1F2937]">CONVERSION RATE</span>
            </div>
            <div className="text-xl font-bold text-[#8B5CF6]">+124%</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
