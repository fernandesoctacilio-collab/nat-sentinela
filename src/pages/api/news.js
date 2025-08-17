import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    // Buscar notícias do G1 Vale do Paraíba
    const g1Response = await axios.get('https://g1.globo.com/sp/vale-do-paraiba-regiao/');
    const $ = cheerio.load(g1Response.data);
    
    const g1News = [];
    
    // Seletor para as notícias principais do G1
    $('.bastian-feed-item').slice(0, 5).each((i, element) => {
      const title = $(element).find('.feed-post-link').text().trim();
      const link = $(element).find('.feed-post-link').attr('href');
      const excerpt = $(element).find('.feed-post-body-resumo').text().trim();
      const img = $(element).find('.bstn-fd-picture-image').attr('src') || '';
      const date = $(element).find('.feed-post-metadata__date').text().trim();
      
      if (title && link) {
        g1News.push({
          title,
          excerpt,
          link: link.startsWith('http') ? link : `https://g1.globo.com${link}`,
          img,
          source: 'G1 Vale do Paraíba',
          date: date || 'Hoje'
        });
      }
    });

    // Buscar notícias da Band Vale
    const bandResponse = await axios.get('https://www.band.com.br/band-vale/');
    const $band = cheerio.load(bandResponse.data);
    
    const bandNews = [];
    
    // Seletor para as notícias da Band Vale
    $band('.noticia').slice(0, 3).each((i, element) => {
      const title = $band(element).find('.titulo').text().trim();
      const link = $band(element).find('a').attr('href');
      const excerpt = $band(element).find('.resumo').text().trim();
      const img = $band(element).find('img').attr('src') || '';
      
      if (title && link) {
        bandNews.push({
          title,
          excerpt,
          link: link.startsWith('http') ? link : `https://www.band.com.br${link}`,
          img,
          source: 'Band Vale',
          date: 'Hoje'
        });
      }
    });

    // Combinar e retornar as notícias
    const allNews = [...g1News, ...bandNews];
    
    res.status(200).json(allNews);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    
    // Dados de fallback em caso de erro
    const fallbackNews = [
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
    ];
    
    res.status(200).json(fallbackNews);
  }
}