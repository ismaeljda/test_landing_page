import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8B5CF6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">Bloumy</span>
        </div>
        <p className="text-white/40 text-xs">
          © 2026 Bloumy. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
