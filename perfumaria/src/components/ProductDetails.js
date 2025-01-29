// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// imagens

import CocoMademoiselle from '../img/CocoMademoiselle.png';

const products = [
  { id: 1,  
    name: 'Coco Mademoiselle - Chanel',
    image: CocoMademoiselle, 
    description: 'COCO MADEMOISELLE Eau de Parfum Intense. A essência de uma mulher livre e cativante. Um amadeirado ambarado com um caráter encorpado: sensual, profundo e viciante. É uma fragrância amadeirada e ambarada com uma personalidade extrema. A fragrância é estruturada em torno de uma overdose de patchouli, aquecida por um acorde ambarado de absoluto de Baunilha e Fava Tonka. Um coração de rosa e jasmim e o frescor contrastante das frutas cítricas adicionam suas notas para compor esta trilha poderosa.', 
    price: ' R$S1.350,00' },

  { id: 2,  
    name: 'Good Girl - Carolina Herrera',
    image:'', 
    description: 'O Good Girl, da marca Carolina Herrera, é um perfume feminino icônico, conhecido tanto por sua fragrância marcante quanto pelo design sofisticado de seu frasco, que imita um sapato de salto alto. Ele é uma declaração de dualidade, representando o lado doce e sedutor, ao mesmo tempo que exala poder e ousadia.', 
    price: 'R$ 449,00' },

  { id: 3,  
    name: 'Gucci Flora Gorgeous Orchid - Gucci',
    image:'', 
    description: 'O Gucci Flora Gorgeous Orchid Eau de Parfum é uma fragrância feminina que combina o charme de um floral gourmand com toques de frescor e sensualidade. A composição apresenta um coração de orquídea baunilha, realçado por notas de baunilha doce e acordes ozônicos, criando um equilíbrio entre riqueza floral e uma  brisa revigorante. Seu frasco vibrante em amarelo, decorado com o icônico padrão Flora, reflete a essência  criativa e empoderada da fragrância. Uma celebração ao espírito livre e único de quem a usa, inspirando a expressão pessoal e a imaginação.', 
    price: 'R$ 969,00' },

  { id: 4,  
    name: "J'adore - Dior",
    image:'' , 
    description: "J'adore eau de parfum é o grande perfume floral feminino da Dior. Um buquê finamente trabalhado até o último  detalhe, como uma flor feita sob medida. A essência do ylang-ylang, com suas notas florais e frutadas, e a  essência da Rosa Damascena da Turquia, misturam-se com a rara dupla de Jasmine Grandiflorum de Grasse e Jasmine  Sambac indiano com uma sensualidade frutada e voluptuosa. J'adore é um perfume feminino floral frutado extraordinário, porque consegue seduzir sem esforço e com uma assinatura original. Sensual, mas não arrogante. Esta é uma composição que une contrastes, transformando notas florais icônicas em um conjunto atraente, sem precedentes e misterioso. J'adore inventa uma flor que não existe.", 
    price: 'R$ 549,00' },

  { id: 5,  
    name: 'Lady Million - Rabanne',
    image:'', 
    description: 'Perfume Lady Million Eau de Parfum é uma criação da renomada Rabanne, concebido para a mulher ousada e confiante que deseja deixar  sua marca por onde passa Lady Million é uma fragrância floral e amadeirada, que combina harmoniosamente diferentes notas para criar uma assinatura olfativa inconfundível. O néctar floral e glamouroso sem inibições que a sensualidade da mulher Lady Million merece. A rica fragrância feminina combina as flores brancas do jasmim árabe e da laranjeira em seu coração com uma proposta fresca e flamejante de néroli, laranja amarga e framboesa.', 
    price: 'R$ 315,00' },

  { id: 6,  
    name: 'Club 6 Cassino - Eudora',
    image:'', 
    description: 'Club 6 Cassino Desodorante Colônia, é você quem dá as cartas para alcançar suas próprias conquistas e ser dono do seu destino. Este produto é uma das fragrâncias de destaque da linha Club 6 Eudora Masculino, que traduz em suas notas a personalidade do homem que sabe vencer os desafios diários do jogo da vida, trazendo firmeza e determinação. Com o poder de tomar as decisões em suas mãos, o Desodorante Colônia Club 6 traduz o total equilíbrio entre a razão e a emoção. A fragrância carrega o contraste do frescor das especiarias com o dulçor do âmbar e a força das madeiras.', 
    price: 'R$ 93,90' },

  { id: 7,  
    name: 'Coffee Man Duo - O Boticário',
    image:'' , 
    description: 'Para homens charmosos e modernos, o Coffee Man Duo Desodorante Colônia é ideal. Possui uma fragrância Amadeirado Fougère que mistura frescor e mistério, daquelas que marcam presença e não são esquecidas. Suas notas de topo são frescas, mas logo encontram o coração amadeirado e a força do Acorde Café au Cream. Suas notas ambaradas, flertam com o Patchouli, acentuando-se com uma nota Couro, trazendo uma perfumação única e extremamente sedutora. O Coffee Man Duo Desodorante Colônia é a prova de que os opostos podem criar uma mistura irresistível! Café au Cream, que traz a força do café misturada com a cremosidade do licor e o frescor de especiarias com o calor do Âmbar. O homem que usa essa fragrância é seguro, determinado e marcante. Se importa com tudo o que veste e usa. Desperte os sentidos e viva experiências únicas com o Desodorante Colônia Coffee Man Duo.', 
    price: 'R$ 199,90' },

  { id: 8,  
    name: 'Homen Essence - Natura',
    image:'' , 
    description: 'Natura Homem Essence celebra a sofisticação e a elegância masculina. com notas amadeiradas e especiadas, esta fragrância exala personalidade e é ideal para o homem que busca uma presença marcante.  Aroma amadeirado e especiado Uma fragrância que equilibra o calor das especiarias com a profundidade das madeiras, ideal para homens que buscam sofisticação e presença marcante. Elegância e Personalidade Natura Homem Essence reflete a essência do homem sofisticado e confiante, com uma fragrância que deixa uma impressão duradoura.', 
    price: 'R$ 139,90' },

  { id: 9,  
    name: 'Acqua di Gio - Giordio Armani',
    image:'' , 
    description: 'Características: refrescante, leve e elegante. Fragrância: Um clássico aquático, leve e cítrico. A fragrância é dominada por notas de limão, bergamota, jasmim, menta e patchouli, criando uma mistura refrescante, perfeita para o dia. Seu perfil  é fresco, sofisticado e levemente amadeirado, e é muito popular para climas quentes, pois transmite a sensação de estar à beira-mar.', 
    price: 'R$ 699,00' },

  { id: 10, 
    name: 'Joop! Hoome Masculino - Joop!',
    image:'' , 
    description: 'Características: refrescante, leve e elegante. Fragrância: Bleu de Chanel é uma fragrância amadeirada aromática que mistura notas de toranja, menta, incenso e madeira de sândalo. Possui uma abertura fresca e revigorante, mas logo se transforma em algo mais profundo e sofisticado com notas amadeiradas e um toque levemente especiado. É uma escolha elegante para o uso diário, com uma ótima projeção e durabilidade.', 
    price: 'R$ 960,00' },

  { id: 11, 
    name: 'Ck One - Calvin Klein',
    image:'' , 
    description: ' O CK One, da icônica marca Calvin Klein, rompe barreiras e celebra a diversidade com uma fragrância unissex que combina a suavidade floral com a intensidade amadeirada. Clean, ousado e universal, este eau de toilette representa a essência da harmonia entre o masculino e o feminino.Com um aroma inovador que exala autenticidade, o CK One traduz a singularidade de cada indivíduo, capturando emoções e oportunidades em cada borrifada. ', 
    price: 'R$ 479,00' },

  { id: 12, 
    name: 'Ck be - Calvin Klein',
    image:'' , 
    description: 'Criado para celebrar a individualidade e a ousadia, CK Be é um perfume unissex que transcende gêneros e estilos. Com uma composição aromática envolvente, mistura notas cítricas, florais e musk, criando um aroma que se funde à pele como uma segunda camada. Seu frescor é destacado pelas notas de saída de bergamota, lavanda e menta, trazendo um toque leve e revigorante. Ideal para quem valoriza elegância e personalidade, CK Be reflete o estilo moderno, minimalista e sofisticado que define a marca Calvin Klein. CK Be é um símbolo de casualidade, sensualidade e estilo, marcando gerações com sua essência única e cativante.', 
    price: 'R$ 349,00' },

  { id: 13,
    name:'Bleu de Chanel Masculino',
    description: 'Características: refrescante, leve e elegante. Fragrância: Bleu de Chanel é uma fragrância amadeirada aromática que mistura notas de toranja, menta, incenso e madeira de sândalo. Possui uma abertura fresca e revigorante, mas logo se transforma em algo mais profundo e sofisticado com notas amadeiradas e um toque levemente especiado. É uma escolha elegante para o uso diário, com uma ótima projeção e durabilidade.',
    price:'R$ 960,00'},

  { id: 14,
    name:'Juliette Has a Gun Another Oud Unissex',
    description: 'Notas Olfativas: Topo: A pimenta rosa abre a composição com um toque ardente e cintilante, despertando os sentidos. Coração: O oud, raro e precioso, é acentuado pelo exotismo do açafrão, resultando em uma harmonia intensa e sedutora. Base: Notas amadeiradas e almíscar trazem suavidade e profundidade, prolongando a elegância do aroma. Quando Usar: Ideal para noites especiais, encontros românticos e ocasiões que pedem sofisticação. Sua presença marcante é perfeita para quem busca se destacar com confiança e elegância. Another Oud é mais do que um perfume: é uma declaração de estilo que une o exótico ao contemporâneo, proporcionando uma assinatura olfativa única e memorável.',
    price:'R$ 1229,00'},

  { id: 15,
    name:'Tom Ford Noir Extreme Unissex',
    description: 'Características: sofisticado, masculino e sedutor. Fragrância: Tom Ford Noir é uma fragrância oriental, rica e misteriosa. Ela possui notas de bergamota, pimenta, baunilha, âmbar e madeira, criando um perfume quente, sensual e envolvente. Ideal para a noite, eventos especiais ou em clima mais frio, é uma fragrância que chama atenção pela  sofisticação e complexidade.',
    price:'R$ 1945,00'},

  { id: 16,
    name:'Juliette Has a Gun Ode to Dullness Unissex',
    description: 'Juliette Has A Gun - Ode To Dullness: A Poesia da Serenidade Ode To Dullness, da Juliette Has A Gun, é uma fragrância unissex que transforma a simplicidade em arte, oferecendo um perfume reconfortante e minimalista. Criado como um bálsamo calmante para os sentidos, ele celebra a beleza da quietude e da introspecção. A composição combina a leveza etérea de Badiane e Freesia com a sensualidade envolvente do sândalo e da flor de caxemira, evocando a sensação de estar embrulhado em um cobertor macio em dias frios. O resultado é um aroma limpo, acolhedor e irresistivelmente sofisticado, perfeito para quem busca um momento de pausa e centralidade. Mais que um perfume, Ode To Dullness é um abraço olfativo que traduz serenidade e elegância em cada borrifada.',
    price:'R$	1229,00'},

  { id: 17,
    name:'Époque Tropical - Granado',
    description: 'Apresenta fragrâncias sofisticadas e atemporais, que carregam o DNA da Granado. Cada fragrância desperta memórias e nos leva a uma jornada pela centenária história da marca através da perfumaria, descobrindo um novo capítulo a cada nota olfativa. Seu perfume marcante explora o lado envolvente das notas amadeiradas de sândalo e guaiaco e equilibra essa intensidade com o cítrico intenso da mandarina e do caju. Essa dualidade é envelopada por um clássico buquê floral de magnólia, rosa e gerânio. É uma fragrância que nos transporta para um passeio pelos jardins do Rio no século XIX.',
    price:'R$ 275,00'},

  { id: 18,
    name:'Essencial Supreme Feminino - Natura',
    description: 'Apresenta fragrâncias sofisticadas e atemporais, que carregam o DNA da Granado. Cada fragrância desperta memórias e nos leva a uma jornada pela centenária história da marca através da perfumaria, descobrindo um novo capítulo a cada nota olfativa. Seu perfume marcante explora o lado envolvente das notas amadeiradas de sândalo e guaiaco e equilibra essa intensidade com o cítrico intenso da mandarina e do caju. Essa dualidade é envelopada por um clássico buquê floral de magnólia, rosa e gerânio. É uma fragrância que nos transporta para um passeio pelos jardins do Rio no século XIX.',
    price:'R$ 259,00'},

  { id: 19,
    name:'Far Away Sun - Avon',
    description: 'Far Away Sun é um perfume marcante, inspirado na delicadeza dos raios de sol da manhã. Viva uma experiência única de glamour nas ocasiões mais especiais, quando quiser um perfume mais solar, floral e fresco. Uma fragrância Floral Frutal, que traz a combinação do floral opulento da Papoula Solar, com notas frutais suculentas e brilhantes do Pêssego, aquecida com notas de Âmbar Dourado, envoltas pela Baunilha, ingrediente que é assinatura da marca e garante a intensidade e longa duração do perfume.',
    price:'R$	49,95'},

  { id: 20,
    name:'Floratta Red Desodorante Colônia - O Boticário',
    description: 'Far Away Sun é um perfume marcante, inspirado na delicadeza dos raios de sol da manhã. Viva uma experiência única de glamour nas ocasiões mais especiais, quando quiser um perfume mais solar, floral e fresco. Uma fragrância Floral Frutal, que traz a combinação do floral opulento da Papoula Solar, com notas frutais suculentas e brilhantes do Pêssego, aquecida com notas de Âmbar Dourado, envoltas pela Baunilha, ingrediente que é assinatura da marca e garante a intensidade e longa duração do perfume.',
    price:'R$	149,90'}

];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="container mt-4">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
    </div>
  );
}

export default ProductDetails;
