import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const SocialProof = () => {
  const logos = [
    { name: "Acme", url: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=200" },
    { name: "Global", url: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=200" },
    { name: "Tech", url: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=200" },
    { name: "Alpha", url: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=200" },
    { name: "Vertex", url: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=200" },
    { name: "Nexus", url: "https://images.unsplash.com/photo-1632965053719-ef245122de92?auto=format&fit=crop&q=80&w=200" },
  ];

  const stats = [
    { value: "500+", label: "Startups" },
    { value: "12k+", label: "Audits réalisés" },
    { value: "4.9/5", label: "Satisfaction" },
  ];

  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale transition-all hover:grayscale-0">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="h-10 w-auto"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl shadow-violet-100/50 border border-violet-50 relative"
          >
            <Quote className="absolute top-8 right-8 text-violet-100" size={64} />
            <div className="flex text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 relative z-10">
              "Bloomyway a transformé notre acquisition en 2 semaines. On a économisé 15k€ d'agence et gagné 3 mois de setup complexe. Une évidence pour tout fondateur."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 overflow-hidden">
                <ImageWithFallback src="https://images.unsplash.com/photo-1630958234938-4f6a4a9dbf3a?auto=format&fit=crop&q=80&w=150" alt="Thomas" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Thomas Roche</p>
                <p className="text-gray-500">CEO @ Lumina SaaS</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-8 text-center lg:text-left">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <p className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
