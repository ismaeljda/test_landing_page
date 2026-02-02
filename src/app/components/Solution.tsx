import React from 'react';
import { Search, ClipboardList, Rocket, BarChart3, Check, Target, TrendingUp, Zap, Shield } from 'lucide-react';

const solutions = [
  {
    title: "Audit Complet",
    description: "On analyse vos GA4 + Meta Ads pour comprendre ce qui ne va pas",
    icon: Search,
    bullets: ["Gaspillages détectés", "Opportunités manquées", "Diagnostics précis", "Score de santé marketing"],
    metrics: "10 points de contrôle analysés"
  },
  {
    title: "Analyse d'Attribution",
    description: "On réconcilie GA4 et Meta pour une vision claire de vos conversions",
    icon: Target,
    bullets: ["Tracking unifié", "Sources de conversion réelles", "ROI par canal", "Modèle d'attribution custom"],
    metrics: "Attribution cross-platform"
  },
  {
    title: "Plan d'Action",
    description: "On dresse un plan d'actions priorisé par impact potentiel",
    icon: ClipboardList,
    bullets: ["Quick wins identifiés", "Priorités par ROI", "Roadmap 30-60-90 jours", "Budget recommandé"],
    metrics: "Actions classées par impact"
  },
  {
    title: "Optimisation Audiences",
    description: "On identifie vos audiences les plus rentables et on supprime celles qui coûtent",
    icon: TrendingUp,
    bullets: ["Segments performants", "Lookalikes optimisés", "Exclusions automatiques", "Retargeting intelligent"],
    metrics: "CPA réduit de 25-40%"
  },
  {
    title: "Tests A/B Automatisés",
    description: "On teste vos créas, audiences et messages en continu pour améliorer les perfs",
    icon: Zap,
    bullets: ["Tests créatifs", "Optimisation budgétaire", "Rotation automatique", "Insights actionnables"],
    metrics: "5-10 tests/mois minimum"
  },
  {
    title: "Alertes Intelligentes",
    description: "On surveille vos campagnes 24/7 et vous alerte en cas d'anomalie",
    icon: Shield,
    bullets: ["Détection anomalies", "Budget protégé", "Performance monitoring", "Alertes en temps réel"],
    metrics: "Monitoring continu automatisé"
  },
  {
    title: "Action Guidée",
    description: "On vous accompagne dans la mise en place technique étape par étape",
    icon: Rocket,
    bullets: ["Support dédié", "Tutoriels vidéos", "Assistance directe", "Templates prêts à l'emploi"],
    metrics: "Implémentation en 7 jours"
  },
  {
    title: "Suivi & Reporting",
    description: "On suit vos métriques et on optimise en continu avec des rapports clairs",
    icon: BarChart3,
    bullets: ["Dashboard temps réel", "Rapports hebdos", "KPIs personnalisés", "Recommandations automatiques"],
    metrics: "Rapports automatisés"
  }
];

export function Solution() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F9F5FF] to-[#FAFAFA] px-6">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
          Bloumy vous accompagne du diagnostic à l'optimisation continue
        </h2>
        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
          On connecte vos outils, on analyse tout, on vous guide, et on optimise en continu.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl border border-[#E5E7EB] transition-all duration-300 hover:shadow-xl group"
          >
            <div className="w-12 h-12 bg-[#F3E8FF] rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-[#8B5CF6]">
              <item.icon className="w-6 h-6 text-[#8B5CF6] transition-colors group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              {item.description}
            </p>
            <ul className="space-y-3 mb-6">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-[#E5E7EB]">
              <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wide">
                {item.metrics}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
