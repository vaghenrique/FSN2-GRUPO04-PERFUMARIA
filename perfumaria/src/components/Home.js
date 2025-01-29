// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const products = [
  { id: 1,  
    name: 'Coco Mademoiselle - Chanel',
    image: '', 
    description: 'Coco Mademoiselle da Chanel é uma fragrância floral ambarada, com notas de laranja e patchouli. Disponível em 50ml e 100ml.', 
    price: 'R$ 1350,00' },

  { id: 2,  
    name: 'Good Girl - Carolina Herrera',
    image:'' , 
    description: 'Good Girl, de Carolina Herrera, é uma fragrância floral oriental com notas de jasmim e cacau. Disponível em 30ml, 50ml, 80ml e 100ml.', 
    price: 'R$ 449,00' },

  { id: 3,  
    name: 'Gucci Flora Gorgeous Orchid - Gucci',
    image:'' , 
    description: 'Gucci Flora Gorgeous Orchid é uma fragrância floral frutada com notas de baunilha e flor de orquídea. Disponível em 50ml e 100ml.', 
    price: 'R$ 969,00' },

  { id: 4,  
    name: "J'adore - Dior",
    image:'' , 
    description: "J'adore, da Dior, é uma fragrância floral feminina que combina ylang-ylang, rosa damascena e jasmim sambac. Disponível em 30ml, 50ml e 100ml.", 
    price: 'R$ 549,00' },

  { id: 5,  
    name: 'Lady Million - Rabanne',
    image:'' , 
    description: 'Lady Million, de Paco Rabanne, é uma fragrância floral frutada com notas de néroli, jasmim e mel. Disponível em 30ml, 50ml, 80ml e 100ml.', 
    price: 'R$ 315,00' },

  { id: 6,  
    name: 'Club 6 Cassino - Eudora',
    image:'' , 
    description: 'Club 6 Cassino, da Eudora, é uma fragrância masculina oriental especiada com notas de gengibre, pimenta preta e fava tonka. Disponível em 95ml.', 
    price: 'R$ 93,90' },

  { id: 7,  
    name: 'Coffee Man Duo - O Boticário',
    image:'' , 
    description: 'Coffee Man Duo, de O Boticário, é uma fragrância masculina com notas de café, lavanda e âmbar. Disponível em 100ml.', 
    price: 'R$ 199,90' },

  { id: 8, 
    name: 'Homen Essence - Natura',
    image:'' , 
    description: 'Natura Homem Essence é um deo parfum masculino com notas frescas e madeiras nobres. Disponível em 100ml.', 
    price: 'R$ 139,90' },

  { id: 9,  
    name: 'Acqua di Gio - Giordio Armani',
    image:'' ,
    description: 'Acqua di Giò, de Giorgio Armani, é uma fragrância masculina fresca e aquática. Com notas de bergamota, jasmim e cedro, está disponível em 30ml, 50ml e 100ml.', 
    price: 'R$ 699,00' },

  { id: 10, 
    name: 'Joop! Hoome Masculino - Joop!',
    image:'Joop! Homme é uma fragrância masculina oriental amadeirada com notas de flor de laranjeira, canela e baunilha. Disponível em 75ml, 125ml e 200ml.' , 
    description: '', 
    price: 'R$ 960,00' },

  { id: 11, 
    name: 'Ck One - Calvin Klein',
    image:'' , 
    description: 'CK One, da Calvin Klein, é uma fragrância unissex cítrica e floral. Disponível em 50ml, 100ml e 200ml.', 
    price: 'R$ 479,00' },

  { id: 12, 
    name: 'Ck Be - Calvin Klein',
    image:'' , 
    description: 'CK Be, da Calvin Klein, é uma fragrância unissex fresca e amadeirada. Disponível em 50ml, 100ml e 200ml.', 
    price: 'R$ 349,00' },

  { id: 13,
    name:'Bleu de Chanel Masculino',
    description: 'Bleu de Chanel é uma fragrância masculina amadeirada e fresca. Disponível em 50ml, 100ml e 200ml.',
    price:'R$ 960,00'},

  { id: 14,
    name:'Juliette Has a Gun Another Oud Unissex',
    description: 'Another Oud, da Juliette Has a Gun, é uma fragrância unissex amadeirada e frutada com oud, framboesa e almíscar. Disponível em 100ml.',
    price:'R$ 1229,00'},

  { id: 15,
    name:'Tom Ford Noir Extreme Unissex',
    description: 'Tom Ford Noir Extreme é uma fragrância unissex oriental amadeirada com notas de cardamomo, gengibre, kulfi e baunilha. Disponível em 50ml, 100ml e 150ml.',
    price:'R$ 1945,00'},

  { id: 16,
    name:'Juliette Has a Gun Ode to Dullness Unissex',
    description: 'Ode to Dullness, da Juliette Has a Gun, é uma fragrância unissex com notas de aniz estrelado, cashmere, sândalo e almíscar. Disponível em 100ml.',
    price:'R$	1229,00'},

  { id: 17,
    name:'Époque Tropical - Granado',
    description: 'Époque Tropical, da Granado, é uma fragrância unissex com notas cítricas e florais, envoltas por sândalo e guaiaco. Disponível em 75ml.',
    price:'R$ 275,00'},

  { id: 18,
    name:'Essencial Supreme Feminino - Natura',
    description: 'Essencial Supreme Feminino, da Natura, é um perfume floral intenso com notas de ylang e canela amazônica. Disponível em 100ml.',
    price:'R$ 259,00'},

  { id: 19,
    name:'Far Away Sun - Avon',
    description: 'Far Away Sun, da Avon, é uma fragrância feminina com notas de pêssego, papoula e âmbar. Disponível em 50ml.',
    price:'R$	49,95'},

  { id: 20,
    name:'Floratta Red Desodorante Colônia - O Boticário',
    description: 'Floratta Red Desodorante Colônia, da O Boticário, é uma fragrância feminina com notas de frutas vermelhas, maçã e chocolate. Disponível em 75ml.',
    price:'R$	149,90'}

];

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Vitrine de Perfumes</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Preço: {product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Ver Detalhes</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
