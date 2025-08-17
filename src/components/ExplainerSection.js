import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Gavel, Search } from 'lucide-react';

const ExplainerSection = () => {
  const topics = [
    {
      icon: <BookOpen size={28} />,
      title: "Como funciona o orçamento público",
      description: "Guia completo para entender como o dinheiro público é arrecadado, aprovado e aplicado no município de Natividade da Serra. Aprenda a ler os documentos oficiais e acompanhar as despesas.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Gavel size={28} />,
      title: "Direitos do cidadão",
      description: "Conheça seus direitos fundamentais e como exigir serviços públicos de qualidade em sua comunidade. Saiba como fazer denúncias e acompanhar as respostas do poder público.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: <Search size={28} />,
      title: "Como fazer uma denúncia",
      description: "Passo a passo para registrar denúncias de corrupção e irregularidades de forma segura e eficaz. Entenda os canais oficiais e como proteger sua identidade.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="explica" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
          >
            SentinelA Explica
          </motion.h2>
          <p className="text-xl text-gray-600">
            Descomplicando conceitos de gestão pública para todos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-amber-400"
            >
              <div className={`w-14 h-14 rounded-lg ${topic.color} flex items-center justify-center mb-6`}>
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">{topic.title}</h3>
              <p className="text-gray-600 mb-6">{topic.description}</p>
              <a 
                href="#" 
                className="text-amber-600 hover:text-amber-800 font-medium inline-flex items-center"
              >
                Ler explicação
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplainerSection;