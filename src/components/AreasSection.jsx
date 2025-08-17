import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HeartPulse, GraduationCap, Home, Users } from 'lucide-react';
// Substituí Tree por Leaf, que é o nome correto no lucide-react
import { Leaf } from 'lucide-react';

const AreasSection = () => {
  const areas = [
    {
      icon: <Scale size={24} />,
      title: "Transparência Pública",
      description: "Fiscalização de contratos, licitações e uso do dinheiro público. Acompanhamento de processos administrativos e decisões da prefeitura e câmara.",
      color: "bg-blue-500"
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Saúde",
      description: "Monitoramento da qualidade dos serviços de saúde, acesso à medicamentos, condições dos postos de saúde e desempenho dos programas municipais.",
      color: "bg-red-500"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Educação",
      description: "Verificação das condições das escolas, merenda escolar, transporte, formação dos professores e desempenho dos alunos em avaliações oficiais.",
      color: "bg-amber-500"
    },
    {
      icon: <Leaf size={24} />,
      title: "Meio Ambiente",
      description: "Proteção das áreas verdes, combate ao desmatamento, gestão de resíduos, qualidade do ar e da água, e preservação da fauna e flora local.",
      color: "bg-green-500"
    },
    {
      icon: <Home size={24} />,
      title: "Habitação",
      description: "Fiscalização de programas habitacionais, condições de moradia, regularização fundiária e políticas de urbanismo e mobilidade urbana.",
      color: "bg-purple-500"
    },
    {
      icon: <Users size={24} />,
      title: "Social",
      description: "Monitoramento de programas de assistência social, combate à pobreza, inclusão de pessoas com deficiência e políticas para grupos vulneráveis.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="atuacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
          >
            Áreas de Atuação
          </motion.h2>
          <p className="text-xl text-gray-600">
            Nossos focos principais de investigação e monitoramento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${area.color} bg-opacity-10 ${area.color.replace('500', '600')} flex items-center justify-center mb-4`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;