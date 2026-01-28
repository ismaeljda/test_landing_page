import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-500">
              Bloomyway
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-violet-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 transition-colors">Comment ça marche</a>
            <a href="#pricing" className="text-gray-600 hover:text-violet-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-violet-600 transition-colors">FAQ</a>
            <button className="bg-violet-600 text-white px-6 py-2 rounded-full font-medium hover:bg-violet-700 transition-all transform hover:scale-105 active:scale-95">
              Commencer gratuitement
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              <a href="#features" onClick={() => setIsOpen(false)} className="text-lg text-gray-600">Features</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg text-gray-600">Comment ça marche</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg text-gray-600">Pricing</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-lg text-gray-600">FAQ</a>
              <button className="w-full bg-violet-600 text-white px-6 py-3 rounded-xl font-medium">
                Commencer gratuitement
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
