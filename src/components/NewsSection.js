import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const NewsSection = ({ news, loading, error }) => {
  // Animação para os cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
          >
            Notícias da Região
          </motion.h2>
          <p className="text-xl text-gray-600">
            As principais notícias do Vale do Paraíba e região, selecionadas para você
          </p>
        </div>

        {error && (
          <div className="max-w-3xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500"></div>
            <p className="mt-4 text-gray-600">Carregando notícias da região...</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {news.map((item, index) => (
              <motion.article 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.img || "https://placehold.co/400x200/e3e3e3/1a3a6e?text=Notícia"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-amber-600 mb-2">
                    <span className="bg-amber-100 px-3 py-1 rounded-full font-medium">
                      {item.source}
                    </span>
                    {item.date && (
                      <span className="ml-2 text-gray-500">
                        • {item.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2 hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                  )}
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800 transition-colors"
                  >
                    Ler no site original
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://g1.globo.com/sp/vale-do-paraiba-regiao/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-700 hover:text-amber-600 font-medium"
          >
            Ver mais notícias no G1 Vale do Paraíba
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;