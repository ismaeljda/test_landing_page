import React from "react";
import { Twitter, Linkedin, Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Product */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Produit</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-violet-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Ressources</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-violet-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Entreprise</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-violet-600 transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Légal</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">Cookies Policy</a></li>
              <li><a href="#" className="hover:text-violet-600 transition-colors">RGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-500">
              Bloomyway
            </span>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              © 2026 Bloomyway. Fait avec <Heart size={14} className="text-rose-500 fill-rose-500" /> pour les startups.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span>🇫🇷 FR</span>
              <span className="text-gray-200">|</span>
              <span className="hover:text-gray-900 cursor-pointer">🇬🇧 EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
