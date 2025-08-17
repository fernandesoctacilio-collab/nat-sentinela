import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ExplainerSection from './components/ExplainerSection';
import AreasSection from './components/AreasSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Não foi possível carregar as notícias no momento. Tente novamente mais tarde.');
        // Dados de fallback para desenvolvimento
        setNews([
          {
            title: "Acidente causa quatro quilômetros de congestionamento",
            excerpt: "O acidente causou quatro quilômetros de congestionamento na região do Vale do Paraíba.",
            link: "https://g1.globo.com/sp/vale-do-paraiba-regiao/",
            img: "https://placehold.co/400x220/e3e3e3/1a3a6e?text=Trânsito",
            source: "G1 Vale do Paraíba",
            date: "Hoje"
          },
          {
            title: "Dois apostadores de SP ganham na Mega-Sena",
            excerpt: "De acordo com a Caixa, as duas apostas vencedoras foram realizadas nas cidades de Aparecida e Bragança Paulista.",
            link: "https://g1.globo.com/sp/vale-do-paraiba-regiao/",
            img: "https://placehold.co/400x220/e3e3e3/1a3a6e?text=Sorteio",
            source: "G1 Vale do Paraíba",
            date: "Ontem"
          },
          {
            title: "Corpo de jovem é encontrado no Litoral Norte",
            excerpt: "Corpo de jovem foi encontrado nesta sexta-feira, no Litoral Norte de SP. Vítima é moradora de Jundiaí.",
            link: "https://g1.globo.com/sp/vale-do-paraiba-regiao/",
            img: "https://placehold.co/400x220/e3e3e3/1a3a6e?text=Investigação",
            source: "G1 Vale do Paraíba",
            date: "Ontem"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
        <NewsSection news={news} loading={loading} error={error} />
        <ExplainerSection />
        <AreasSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;