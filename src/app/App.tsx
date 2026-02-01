import React, { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Countdown } from '@/app/components/Countdown';
import { PainPoints } from '@/app/components/PainPoints';
import { Solution } from '@/app/components/Solution';
import { HowItWorks } from '@/app/components/HowItWorks';
import { WaitlistSection } from '@/app/components/WaitlistSection';
import { FAQ } from '@/app/components/FAQ';
import { Footer } from '@/app/components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2937] selection:bg-[#F3E8FF] selection:text-[#8B5CF6]">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <Countdown targetDate="2026-02-22T00:00:00" />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <WaitlistSection />
        <FAQ />
        <section className="py-[60px] bg-gradient-to-b from-[#F9FAFB] to-white text-center px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1F2937]">
              Prêt à optimiser votre marketing ?
            </h2>
            <p className="text-[16px] text-[#6B7280]">
              Rejoignez la liste d'attente maintenant
            </p>
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-102 shadow-lg shadow-violet-200"
              >
                Rejoindre la liste d'attente
              </button>
            </div>
            <p className="text-[12px] text-[#9CA3AF]">
              ⏱️ Lancement dans 21 jours · 23 places restantes
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
