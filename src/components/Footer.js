import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Sobre o SentinelA",
      items: [
        { text: "Nossa missão", href: "#" },
        { text: "Equipe", href: "#" },
        { text: "Código de Ética", href: "#" },
        { text: "Metodologia", href: "#" }
      ]
    },
    {
      title: "Transparência",
      items: [
        { text: "Como verificamos", href: "#" },
        { text: "Fontes", href: "#" },
        { text: "Correções", href: "#" },
        { text: "Financiamento", href: "#" }
      ]
    },
    {
      title: "Colabore",
      items: [
        { text: "Denuncie", href: "#" },
        { text: "Acompanhe", href: "#" },
        { text: "Seja um colaborador", href: "#" },
        { text: "Parcerias", href: "#" }
      ]
    },
    {
      title: "Contato",
      items: [
        { 
          text: "contato@sentinelasite.com", 
          href: "mailto:contato@sentinelasite.com",
          icon: <Mail size={16} />
        },
        { 
          text: "(12) 3456-7890", 
          href: "tel:+551234567890",
          icon: <Phone size={16} />
        },
        { 
          text: "Natividade da Serra, SP", 
          href: "#",
          icon: <MapPin size={16} />
        }
      ]
    }
  ];

  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-amber-400 mb-6 pb-2 border-b border-gray-800">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className="flex items-center text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-amber-400 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary-900">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">SentinelA</span>
            </div>
            
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SentinelA - Transparência e Ação Cidadã. Todos os direitos reservados.</p>
            <p className="mt-2">Este é um projeto independente de jornalismo investigativo. Não recebemos verbas públicas e somos financiados por doações da comunidade.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;