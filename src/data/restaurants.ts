import type { Restaurant } from '../types'
import { foodImage, palettes } from '../utils/images'

const restaurants: Restaurant[] = [
  {
    id: 1,
    slug: 'hioki-sushi',
    title: 'Hioki Sushi',
    category: 'Japonesa',
    highlighted: true,
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis picantes e temakis generosos preparados na hora por chefs especializados. Entrega rápida, embalagens sustentáveis e qualidade garantida.',
    thumb: foodImage('🍣', palettes.japonesa, 472, 217),
    cover: foodImage('🍣', palettes.japonesa, 1440, 280),
    dishes: [
      {
        id: 101,
        name: 'Combinado Hioki',
        description:
          'Seleção do chef com 20 peças entre sushis, uramakis e sashimis de salmão e atum, acompanhada de shoyu, gengibre e wasabi.',
        price: 89.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍣', palettes.japonesa, 560, 560)
      },
      {
        id: 102,
        name: 'Temaki de Salmão',
        description:
          'Cone de alga nori recheado com arroz temperado, salmão fresco em cubos, cream cheese e cebolinha.',
        price: 32.5,
        portion: '1 pessoa',
        image: foodImage('🌯', palettes.japonesa, 560, 560)
      },
      {
        id: 103,
        name: 'Uramaki Filadélfia',
        description:
          'Oito peças de uramaki com salmão, cream cheese e cebolinha, finalizadas com gergelim tostado.',
        price: 38.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍥', palettes.japonesa, 560, 560)
      },
      {
        id: 104,
        name: 'Gyoza da Casa',
        description:
          'Seis pastéis japoneses grelhados com recheio de porco, repolho e gengibre, servidos com molho tarê.',
        price: 29.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🥟', palettes.japonesa, 560, 560)
      },
      {
        id: 105,
        name: 'Ramen Tonkotsu',
        description:
          'Caldo de porco cozido por 12 horas, macarrão artesanal, chashu, ovo marinado, cebolinha e nori.',
        price: 54.0,
        portion: '1 pessoa',
        image: foodImage('🍜', palettes.japonesa, 560, 560)
      },
      {
        id: 106,
        name: 'Yakisoba Especial',
        description:
          'Macarrão oriental salteado no wok com frango, carne, camarão e mix de legumes frescos.',
        price: 47.5,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍝', palettes.japonesa, 560, 560)
      }
    ]
  },
  {
    id: 2,
    slug: 'la-dolce-vita-trattoria',
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    highlighted: true,
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a Itália até você! Sabores autênticos e ingredientes frescos, com massas caseiras, pizzas de forno a lenha e sobremesas irresistíveis preparadas por quem entende do assunto.',
    thumb: foodImage('🍕', palettes.italiana, 472, 217),
    cover: foodImage('🍕', palettes.italiana, 1440, 280),
    dishes: [
      {
        id: 201,
        name: 'Pizza Marguerita',
        description:
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Feita com molho de tomate, mussarela de búfala, manjericão fresco e azeite extra virgem.',
        price: 60.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍕', palettes.italiana, 560, 560)
      },
      {
        id: 202,
        name: 'Lasanha à Bolonhesa',
        description:
          'Camadas de massa fresca intercaladas com ragu de carne cozido lentamente, molho bechamel e parmesão gratinado.',
        price: 58.0,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍝', palettes.italiana, 560, 560)
      },
      {
        id: 203,
        name: 'Nhoque ao Sugo',
        description:
          'Nhoque de batata feito à mão, servido com molho de tomate italiano, manjericão e lascas de parmesão.',
        price: 49.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🥟', palettes.italiana, 560, 560)
      },
      {
        id: 204,
        name: 'Risoto de Funghi',
        description:
          'Arroz arbóreo cremoso com mix de cogumelos frescos, vinho branco, manteiga e parmesão envelhecido.',
        price: 62.5,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍚', palettes.italiana, 560, 560)
      },
      {
        id: 205,
        name: 'Bruschetta Toscana',
        description:
          'Quatro fatias de pão italiano tostado com tomate, alho, manjericão e azeite extra virgem.',
        price: 26.0,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🥖', palettes.italiana, 560, 560)
      },
      {
        id: 206,
        name: 'Tiramisù',
        description:
          'Sobremesa gelada com camadas de biscoito champagne embebido em café, creme de mascarpone e cacau.',
        price: 28.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍰', palettes.italiana, 560, 560)
      }
    ]
  },
  {
    id: 3,
    slug: 'cantina-toscana',
    title: 'Cantina Toscana',
    category: 'Italiana',
    highlighted: false,
    rating: 4.7,
    description:
      'Massas frescas feitas todos os dias, molhos de longa cocção e um cardápio inspirado nas cantinas da Toscana. Um jantar em família com gosto de viagem, entregue quentinho na sua porta.',
    thumb: foodImage('🍝', palettes.italiana, 472, 217),
    cover: foodImage('🍝', palettes.italiana, 1440, 280),
    dishes: [
      {
        id: 301,
        name: 'Ravioli de Ricota',
        description:
          'Massa fresca recheada com ricota e espinafre, servida com manteiga de sálvia e nozes tostadas.',
        price: 55.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🥟', palettes.italiana, 560, 560)
      },
      {
        id: 302,
        name: 'Fettuccine Alfredo',
        description:
          'Fettuccine artesanal envolvido em creme de leite fresco, manteiga e parmesão ralado na hora.',
        price: 52.0,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍝', palettes.italiana, 560, 560)
      },
      {
        id: 303,
        name: 'Focaccia da Casa',
        description:
          'Pão italiano assado com azeite, alecrim e flor de sal, acompanhado de pasta de tomate seco.',
        price: 24.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🥖', palettes.italiana, 560, 560)
      },
      {
        id: 304,
        name: 'Parmegiana de Frango',
        description:
          'Filé de frango empanado, coberto com molho de tomate e queijo gratinado, com arroz e batata rústica.',
        price: 64.0,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍗', palettes.italiana, 560, 560)
      },
      {
        id: 305,
        name: 'Pizza Quattro Formaggi',
        description:
          'Massa de fermentação natural com mussarela, gorgonzola, provolone e parmesão.',
        price: 68.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍕', palettes.italiana, 560, 560)
      },
      {
        id: 306,
        name: 'Panna Cotta',
        description:
          'Creme italiano de baunilha com calda de frutas vermelhas feita na casa.',
        price: 25.5,
        portion: '1 pessoa',
        image: foodImage('🍮', palettes.italiana, 560, 560)
      }
    ]
  },
  {
    id: 4,
    slug: 'sabor-do-oriente',
    title: 'Sabor do Oriente',
    category: 'Asiática',
    highlighted: false,
    rating: 4.8,
    description:
      'Uma viagem pelos sabores da Ásia: pratos tailandeses, chineses e vietnamitas preparados no wok, com especiarias importadas e o equilíbrio perfeito entre doce, salgado e picante.',
    thumb: foodImage('🍜', palettes.asiatica, 472, 217),
    cover: foodImage('🍜', palettes.asiatica, 1440, 280),
    dishes: [
      {
        id: 401,
        name: 'Pad Thai',
        description:
          'Macarrão de arroz salteado com camarão, ovos, broto de feijão, amendoim e molho de tamarindo.',
        price: 58.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍜', palettes.asiatica, 560, 560)
      },
      {
        id: 402,
        name: 'Curry Verde',
        description:
          'Frango cozido em leite de coco com pasta de curry verde, manjericão tailandês e legumes.',
        price: 56.0,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍛', palettes.asiatica, 560, 560)
      },
      {
        id: 403,
        name: 'Rolinho Primavera',
        description:
          'Seis rolinhos crocantes de legumes com molho agridoce artesanal.',
        price: 27.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🥟', palettes.asiatica, 560, 560)
      },
      {
        id: 404,
        name: 'Frango Xadrez',
        description:
          'Cubos de frango salteados no wok com pimentões, cebola, castanha de caju e molho shoyu.',
        price: 49.5,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍗', palettes.asiatica, 560, 560)
      },
      {
        id: 405,
        name: 'Arroz Frito Oriental',
        description:
          'Arroz salteado com ovos, ervilha, cenoura, cebolinha e lascas de porco caramelizado.',
        price: 38.0,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍚', palettes.asiatica, 560, 560)
      },
      {
        id: 406,
        name: 'Sorvete de Chá Verde',
        description:
          'Sorvete cremoso de matcha com raspas de chocolate branco e gergelim caramelizado.',
        price: 22.9,
        portion: '1 pessoa',
        image: foodImage('🍨', palettes.asiatica, 560, 560)
      }
    ]
  },
  {
    id: 5,
    slug: 'le-petit-bistro',
    title: 'Le Petit Bistrô',
    category: 'Francesa',
    highlighted: false,
    rating: 4.5,
    description:
      'O charme de um bistrô parisiense no seu delivery. Receitas clássicas francesas, pães assados no dia e sobremesas que fecham a noite com maestria.',
    thumb: foodImage('🥐', palettes.francesa, 472, 217),
    cover: foodImage('🥐', palettes.francesa, 1440, 280),
    dishes: [
      {
        id: 501,
        name: 'Coq au Vin',
        description:
          'Frango cozido lentamente em vinho tinto com bacon, cogumelos e cebolas pérola.',
        price: 74.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍗', palettes.francesa, 560, 560)
      },
      {
        id: 502,
        name: 'Quiche Lorraine',
        description:
          'Torta salgada de massa amanteigada com bacon, queijo gruyère e creme de leite fresco.',
        price: 46.0,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🥧', palettes.francesa, 560, 560)
      },
      {
        id: 503,
        name: 'Ratatouille',
        description:
          'Legumes assados em camadas com berinjela, abobrinha, tomate e ervas de Provence.',
        price: 42.5,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍆', palettes.francesa, 560, 560)
      },
      {
        id: 504,
        name: 'Sopa de Cebola Gratinada',
        description:
          'Caldo escuro de cebolas caramelizadas com pão rústico e queijo gratinado no forno.',
        price: 36.9,
        portion: '1 pessoa',
        image: foodImage('🍲', palettes.francesa, 560, 560)
      },
      {
        id: 505,
        name: 'Baguete Artesanal',
        description:
          'Baguete de fermentação lenta assada no dia, servida com manteiga de ervas.',
        price: 18.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🥖', palettes.francesa, 560, 560)
      },
      {
        id: 506,
        name: 'Crème Brûlée',
        description:
          'Creme de baunilha de Madagascar com crosta de açúcar caramelizada na hora.',
        price: 29.9,
        portion: '1 pessoa',
        image: foodImage('🍮', palettes.francesa, 560, 560)
      }
    ]
  },
  {
    id: 6,
    slug: 'casa-do-churrasco',
    title: 'Casa do Churrasco',
    category: 'Brasileira',
    highlighted: false,
    rating: 4.4,
    description:
      'Carnes nobres na brasa, acompanhamentos generosos e aquele tempero de casa. Ideal para reunir a família no fim de semana sem precisar acender a churrasqueira.',
    thumb: foodImage('🥩', palettes.brasileira, 472, 217),
    cover: foodImage('🥩', palettes.brasileira, 1440, 280),
    dishes: [
      {
        id: 601,
        name: 'Picanha na Brasa',
        description:
          'Picanha grelhada no ponto, fatiada e servida com farofa, vinagrete e pão de alho.',
        price: 98.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🥩', palettes.brasileira, 560, 560)
      },
      {
        id: 602,
        name: 'Costela no Bafo',
        description:
          'Costela bovina assada por 8 horas, desfiando no garfo, com mandioca cozida na manteiga.',
        price: 92.0,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍖', palettes.brasileira, 560, 560)
      },
      {
        id: 603,
        name: 'Feijoada Completa',
        description:
          'Feijoada tradicional com carnes selecionadas, arroz, couve, farofa e laranja.',
        price: 79.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍲', palettes.brasileira, 560, 560)
      },
      {
        id: 604,
        name: 'Pão de Alho',
        description:
          'Quatro unidades de pão de alho artesanal grelhado com queijo derretido.',
        price: 21.9,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🧄', palettes.brasileira, 560, 560)
      },
      {
        id: 605,
        name: 'Farofa da Casa',
        description:
          'Farofa crocante de bacon, ovos, cebola e banana caramelizada.',
        price: 19.5,
        portion: 'de 2 a 3 pessoas',
        image: foodImage('🍚', palettes.brasileira, 560, 560)
      },
      {
        id: 606,
        name: 'Pudim de Leite',
        description:
          'Pudim cremoso de leite condensado com calda de caramelo escuro.',
        price: 23.9,
        portion: 'de 1 a 2 pessoas',
        image: foodImage('🍮', palettes.brasileira, 560, 560)
      }
    ]
  }
]

export default restaurants

export const getRestaurantBySlug = (slug?: string) =>
  restaurants.find((restaurant) => restaurant.slug === slug)
