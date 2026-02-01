import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'motion/react';

interface WaitlistData {
  email: string;
  name?: string;
  website?: string;
}

export function WaitlistSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<WaitlistData>();

  const onSubmit = async (data: WaitlistData) => {
    try {
      console.log('📤 Envoi des données:', data);

      const response = await fetch('http://localhost:8000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'inscription');
      }

      console.log('✅ Réponse du serveur:', result);
      toast.success('Félicitations ! Vous êtes inscrit sur la liste d\'attente.');
      reset();
    } catch (error) {
      console.error('❌ Erreur:', error);
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue. Réessayez.');
    }
  };

  return (
    <section id="waitlist-form" className="py-20 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] px-6 text-white overflow-hidden relative">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
            🎯 Places limitées
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Rejoignez les 50 premiers
          </h2>
          <p className="text-lg text-white/90">
            Soyez alerté en priorité du lancement le 22 février 2026
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-[600px] mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#1F2937]">Email professionnel</label>
              <input
                {...register("email", { required: "L'email est requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })}
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-lg text-[#1F2937] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#1F2937]">Nom complet (optionnel)</label>
              <input
                {...register("name")}
                type="text"
                placeholder="Jean Dupont"
                className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-lg text-[#1F2937] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="website" className="text-sm font-medium text-[#1F2937]">Site web (optionnel)</label>
              <input
                {...register("website")}
                type="url"
                placeholder="https://votre-site.com"
                className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-lg text-[#1F2937] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg shadow-violet-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : 'Rejoindre la liste d\'attente'}
            </button>

            <div className="flex justify-center items-center gap-4 text-[11px] text-[#9CA3AF]">
              <span>⚡ Inscription rapide</span>
              <span>🎯 Accès prioritaire</span>
              <span>🔒 Données sécurisées</span>
            </div>
          </form>
        </motion.div>

        <p className="mt-8 text-center text-white/80 font-medium">
          Déjà 15 inscrits · 23 places restantes
        </p>
      </div>
    </section>
  );
}
