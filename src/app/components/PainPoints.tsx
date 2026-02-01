import React from 'react';
import { XCircle } from 'lucide-react';

const pains = [
  {
    title: "Vous dépensez 500-2000€/mois en Meta Ads",
    description: "Mais vous n'avez aucune idée du retour sur investissement réel de chaque euro dépensé."
  },
  {
    title: "Vous ne savez pas si vos pubs fonctionnent",
    description: "Conversions Meta vs GA4 ? Les données se contredisent et vous naviguez à vue."
  },
  {
    title: "Trop d'outils différents à gérer",
    description: "GA4, Meta Business Suite, PageSpeed... vous perdez 10h par semaine à tout croiser."
  }
];

export function PainPoints() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center mb-16">
          Vous vous reconnaissez ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="bg-[#F9FAFB] p-8 rounded-2xl border border-[#E5E7EB] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-4">
                {pain.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
