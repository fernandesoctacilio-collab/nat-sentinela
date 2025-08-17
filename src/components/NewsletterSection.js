import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateEmail(email)) {
      setIsValid(true);
      setIsSubmitted(true);
      // Aqui você adicionaria a lógica para enviar o email para seu serviço de newsletter
      console.log('Email cadastrado:', email);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    } else {
      setIsValid(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10"
          >
            <Mail size={48} className="text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Fique por dentro das investigações
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Inscreva-se para receber nossos relatórios exclusivos diretamente no seu e-mail. 
              Seja o primeiro a saber quando publicamos uma nova investigação.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(true);
                    }}
                    placeholder="Seu melhor e-mail"
                    className={`w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                      !isValid ? 'border-2 border-red-400' : ''
                    }`}
                  />
                  {!isValid && (
                    <p className="text-red-400 text-sm mt-1 text-left">Por favor, insira um e-mail válido</p>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-amber-400 text-primary-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-colors whitespace-nowrap"
                >
                  Inscrever-se
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center bg-green-500/10 border border-green-500/20 rounded-xl p-6"
              >
                <Check size={32} className="text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Inscrição confirmada!</h3>
                <p className="text-gray-300">
                  Você receberá nossas atualizações em breve. Obrigado por se juntar à nossa comunidade!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;