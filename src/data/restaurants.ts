/**
 * Massa de dados de exemplo no mesmo formato da API do efood.
 * O app consome a API real (src/services/api.ts); este arquivo fica como
 * referencia para desenvolvimento offline.
 */
import type { Restaurant } from '../types'
import { foodImage, palettes } from '../utils/images'

const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'japonesa',
    destacado: true,
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis picantes e temakis generosos preparados na hora por chefs especializados. Entrega rápida, embalagens sustentáveis e qualidade garantida.',
    capa: foodImage('🍣', palettes.japonesa, 1024, 400),
    cardapio: [
      {
        id: 101,
        nome: 'Combinado Hioki',
        descricao:
          'Seleção do chef com 20 peças entre sushis, uramakis e sashimis de salmão e atum, acompanhada de shoyu, gengibre e wasabi.',
        preco: 89.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍣', palettes.japonesa, 560, 560)
      },
      {
        id: 102,
        nome: 'Temaki de Salmão',
        descricao:
          'Cone de alga nori recheado com arroz temperado, salmão fresco em cubos, cream cheese e cebolinha.',
        preco: 32.5,
        porcao: '1 pessoa',
        foto: foodImage('🌯', palettes.japonesa, 560, 560)
      },
      {
        id: 103,
        nome: 'Uramaki Filadélfia',
        descricao:
          'Oito peças de uramaki com salmão, cream cheese e cebolinha, finalizadas com gergelim tostado.',
        preco: 38.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍥', palettes.japonesa, 560, 560)
      },
      {
        id: 104,
        nome: 'Gyoza da Casa',
        descricao:
          'Seis pastéis japoneses grelhados com recheio de porco, repolho e gengibre, servidos com molho tarê.',
        preco: 29.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🥟', palettes.japonesa, 560, 560)
      },
      {
        id: 105,
        nome: 'Ramen Tonkotsu',
        descricao:
          'Caldo de porco cozido por 12 horas, macarrão artesanal, chashu, ovo marinado, cebolinha e nori.',
        preco: 54.0,
        porcao: '1 pessoa',
        foto: foodImage('🍜', palettes.japonesa, 560, 560)
      },
      {
        id: 106,
        nome: 'Yakisoba Especial',
        descricao:
          'Macarrão oriental salteado no wok com frango, carne, camarão e mix de legumes frescos.',
        preco: 47.5,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍝', palettes.japonesa, 560, 560)
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'italiana',
    destacado: true,
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a Itália até você! Sabores autênticos e ingredientes frescos, com massas caseiras, pizzas de forno a lenha e sobremesas irresistíveis preparadas por quem entende do assunto.',
    capa: foodImage('🍕', palettes.italiana, 1024, 400),
    cardapio: [
      {
        id: 201,
        nome: 'Pizza Marguerita',
        descricao:
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Feita com molho de tomate, mussarela de búfala, manjericão fresco e azeite extra virgem.',
        preco: 60.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍕', palettes.italiana, 560, 560)
      },
      {
        id: 202,
        nome: 'Lasanha à Bolonhesa',
        descricao:
          'Camadas de massa fresca intercaladas com ragu de carne cozido lentamente, molho bechamel e parmesão gratinado.',
        preco: 58.0,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍝', palettes.italiana, 560, 560)
      },
      {
        id: 203,
        nome: 'Nhoque ao Sugo',
        descricao:
          'Nhoque de batata feito à mão, servido com molho de tomate italiano, manjericão e lascas de parmesão.',
        preco: 49.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🥟', palettes.italiana, 560, 560)
      },
      {
        id: 204,
        nome: 'Risoto de Funghi',
        descricao:
          'Arroz arbóreo cremoso com mix de cogumelos frescos, vinho branco, manteiga e parmesão envelhecido.',
        preco: 62.5,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍚', palettes.italiana, 560, 560)
      },
      {
        id: 205,
        nome: 'Bruschetta Toscana',
        descricao:
          'Quatro fatias de pão italiano tostado com tomate, alho, manjericão e azeite extra virgem.',
        preco: 26.0,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🥖', palettes.italiana, 560, 560)
      },
      {
        id: 206,
        nome: 'Tiramisù',
        descricao:
          'Sobremesa gelada com camadas de biscoito champagne embebido em café, creme de mascarpone e cacau.',
        preco: 28.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍰', palettes.italiana, 560, 560)
      }
    ]
  },
  {
    id: 3,
    titulo: 'Cantina Toscana',
    tipo: 'italiana',
    destacado: false,
    avaliacao: 4.7,
    descricao:
      'Massas frescas feitas todos os dias, molhos de longa cocção e um cardápio inspirado nas cantinas da Toscana. Um jantar em família com gosto de viagem, entregue quentinho na sua porta.',
    capa: foodImage('🍝', palettes.italiana, 1024, 400),
    cardapio: [
      {
        id: 301,
        nome: 'Ravioli de Ricota',
        descricao:
          'Massa fresca recheada com ricota e espinafre, servida com manteiga de sálvia e nozes tostadas.',
        preco: 55.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🥟', palettes.italiana, 560, 560)
      },
      {
        id: 302,
        nome: 'Fettuccine Alfredo',
        descricao:
          'Fettuccine artesanal envolvido em creme de leite fresco, manteiga e parmesão ralado na hora.',
        preco: 52.0,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍝', palettes.italiana, 560, 560)
      },
      {
        id: 303,
        nome: 'Focaccia da Casa',
        descricao:
          'Pão italiano assado com azeite, alecrim e flor de sal, acompanhado de pasta de tomate seco.',
        preco: 24.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🥖', palettes.italiana, 560, 560)
      },
      {
        id: 304,
        nome: 'Parmegiana de Frango',
        descricao:
          'Filé de frango empanado, coberto com molho de tomate e queijo gratinado, com arroz e batata rústica.',
        preco: 64.0,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍗', palettes.italiana, 560, 560)
      },
      {
        id: 305,
        nome: 'Pizza Quattro Formaggi',
        descricao:
          'Massa de fermentação natural com mussarela, gorgonzola, provolone e parmesão.',
        preco: 68.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍕', palettes.italiana, 560, 560)
      },
      {
        id: 306,
        nome: 'Panna Cotta',
        descricao:
          'Creme italiano de baunilha com calda de frutas vermelhas feita na casa.',
        preco: 25.5,
        porcao: '1 pessoa',
        foto: foodImage('🍮', palettes.italiana, 560, 560)
      }
    ]
  },
  {
    id: 4,
    titulo: 'Sabor do Oriente',
    tipo: 'asiática',
    destacado: false,
    avaliacao: 4.8,
    descricao:
      'Uma viagem pelos sabores da Ásia: pratos tailandeses, chineses e vietnamitas preparados no wok, com especiarias importadas e o equilíbrio perfeito entre doce, salgado e picante.',
    capa: foodImage('🍜', palettes.asiatica, 1024, 400),
    cardapio: [
      {
        id: 401,
        nome: 'Pad Thai',
        descricao:
          'Macarrão de arroz salteado com camarão, ovos, broto de feijão, amendoim e molho de tamarindo.',
        preco: 58.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍜', palettes.asiatica, 560, 560)
      },
      {
        id: 402,
        nome: 'Curry Verde',
        descricao:
          'Frango cozido em leite de coco com pasta de curry verde, manjericão tailandês e legumes.',
        preco: 56.0,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍛', palettes.asiatica, 560, 560)
      },
      {
        id: 403,
        nome: 'Rolinho Primavera',
        descricao:
          'Seis rolinhos crocantes de legumes com molho agridoce artesanal.',
        preco: 27.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🥟', palettes.asiatica, 560, 560)
      },
      {
        id: 404,
        nome: 'Frango Xadrez',
        descricao:
          'Cubos de frango salteados no wok com pimentões, cebola, castanha de caju e molho shoyu.',
        preco: 49.5,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍗', palettes.asiatica, 560, 560)
      },
      {
        id: 405,
        nome: 'Arroz Frito Oriental',
        descricao:
          'Arroz salteado com ovos, ervilha, cenoura, cebolinha e lascas de porco caramelizado.',
        preco: 38.0,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍚', palettes.asiatica, 560, 560)
      },
      {
        id: 406,
        nome: 'Sorvete de Chá Verde',
        descricao:
          'Sorvete cremoso de matcha com raspas de chocolate branco e gergelim caramelizado.',
        preco: 22.9,
        porcao: '1 pessoa',
        foto: foodImage('🍨', palettes.asiatica, 560, 560)
      }
    ]
  },
  {
    id: 5,
    titulo: 'Le Petit Bistrô',
    tipo: 'francesa',
    destacado: false,
    avaliacao: 4.5,
    descricao:
      'O charme de um bistrô parisiense no seu delivery. Receitas clássicas francesas, pães assados no dia e sobremesas que fecham a noite com maestria.',
    capa: foodImage('🥐', palettes.francesa, 1024, 400),
    cardapio: [
      {
        id: 501,
        nome: 'Coq au Vin',
        descricao:
          'Frango cozido lentamente em vinho tinto com bacon, cogumelos e cebolas pérola.',
        preco: 74.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍗', palettes.francesa, 560, 560)
      },
      {
        id: 502,
        nome: 'Quiche Lorraine',
        descricao:
          'Torta salgada de massa amanteigada com bacon, queijo gruyère e creme de leite fresco.',
        preco: 46.0,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🥧', palettes.francesa, 560, 560)
      },
      {
        id: 503,
        nome: 'Ratatouille',
        descricao:
          'Legumes assados em camadas com berinjela, abobrinha, tomate e ervas de Provence.',
        preco: 42.5,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍆', palettes.francesa, 560, 560)
      },
      {
        id: 504,
        nome: 'Sopa de Cebola Gratinada',
        descricao:
          'Caldo escuro de cebolas caramelizadas com pão rústico e queijo gratinado no forno.',
        preco: 36.9,
        porcao: '1 pessoa',
        foto: foodImage('🍲', palettes.francesa, 560, 560)
      },
      {
        id: 505,
        nome: 'Baguete Artesanal',
        descricao:
          'Baguete de fermentação lenta assada no dia, servida com manteiga de ervas.',
        preco: 18.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🥖', palettes.francesa, 560, 560)
      },
      {
        id: 506,
        nome: 'Crème Brûlée',
        descricao:
          'Creme de baunilha de Madagascar com crosta de açúcar caramelizada na hora.',
        preco: 29.9,
        porcao: '1 pessoa',
        foto: foodImage('🍮', palettes.francesa, 560, 560)
      }
    ]
  },
  {
    id: 6,
    titulo: 'Casa do Churrasco',
    tipo: 'brasileira',
    destacado: false,
    avaliacao: 4.4,
    descricao:
      'Carnes nobres na brasa, acompanhamentos generosos e aquele tempero de casa. Ideal para reunir a família no fim de semana sem precisar acender a churrasqueira.',
    capa: foodImage('🥩', palettes.brasileira, 1024, 400),
    cardapio: [
      {
        id: 601,
        nome: 'Picanha na Brasa',
        descricao:
          'Picanha grelhada no ponto, fatiada e servida com farofa, vinagrete e pão de alho.',
        preco: 98.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🥩', palettes.brasileira, 560, 560)
      },
      {
        id: 602,
        nome: 'Costela no Bafo',
        descricao:
          'Costela bovina assada por 8 horas, desfiando no garfo, com mandioca cozida na manteiga.',
        preco: 92.0,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍖', palettes.brasileira, 560, 560)
      },
      {
        id: 603,
        nome: 'Feijoada Completa',
        descricao:
          'Feijoada tradicional com carnes selecionadas, arroz, couve, farofa e laranja.',
        preco: 79.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍲', palettes.brasileira, 560, 560)
      },
      {
        id: 604,
        nome: 'Pão de Alho',
        descricao:
          'Quatro unidades de pão de alho artesanal grelhado com queijo derretido.',
        preco: 21.9,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🧄', palettes.brasileira, 560, 560)
      },
      {
        id: 605,
        nome: 'Farofa da Casa',
        descricao:
          'Farofa crocante de bacon, ovos, cebola e banana caramelizada.',
        preco: 19.5,
        porcao: 'de 2 a 3 pessoas',
        foto: foodImage('🍚', palettes.brasileira, 560, 560)
      },
      {
        id: 606,
        nome: 'Pudim de Leite',
        descricao:
          'Pudim cremoso de leite condensado com calda de caramelo escuro.',
        preco: 23.9,
        porcao: 'de 1 a 2 pessoas',
        foto: foodImage('🍮', palettes.brasileira, 560, 560)
      }
    ]
  }
]

export default restaurants

export const getRestaurantById = (id: number) =>
  restaurants.find((restaurant) => restaurant.id === id)
