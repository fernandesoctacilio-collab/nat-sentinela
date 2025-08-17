import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/images/banner.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-primary-900/90 to-primary-700/90" />
        <img 
          src={bannerImage} 
          alt="Natividade da Serra" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transparência e Ação Cidadã
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">
            Jornalismo investigativo com foco em Natividade da Serra e região. 
            Descomplicando a gestão pública para todos os cidadãos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#destaque"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 text-primary-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-300 transition-colors"
            >
              Ver Destaque
            </motion.a>
            <motion.a
              href="#explica"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-amber-300 text-amber-200 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-900/30 transition-colors"
            >
              Aprender Mais
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;