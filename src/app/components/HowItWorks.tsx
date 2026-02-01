import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Connectez vos outils",
    description: "GA4 + Meta Ads en 1 clic",
    duration: "2 minutes"
  },
  {
    number: "2",
    title: "On analyse tout",
    description: "Audit + diagnostic complet",
    duration: "10 minutes"
  },
  {
    number: "3",
    title: "Recevez votre plan",
    description: "Actions priorisées par email",
    duration: "Email + Dashboard"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center mb-20">
          Comment ça marche ?
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-[#E5E7EB] -z-10" />
          
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[280px]">
                <div className="w-16 h-16 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-violet-200 ring-8 ring-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  {step.description}
                </p>
                <div className="text-[12px] text-[#10B981] font-bold uppercase tracking-wider">
                  {step.duration}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-8 h-8 text-[#D1D5DB]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
