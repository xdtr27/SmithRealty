const { v4: uuid } = require("uuid");

const properties = [
  {
    id: uuid(),
    key: 1,
    name: "Apartamento no Leblon",
    neighbourhood: "Leblon",
    city: "Rio de Janeiro",
    price: "R$ 1.750.000,00",
    description:
      "Um apartamento de luxo localizado no bairro sofisticado do Leblon, com vista para o mar.",
    imageUrl:
      "https://conteudo.imguol.com.br/c/noticias/85/2022/06/28/cobertura-no-leblon-e-vendida-por-r-42-milhoes-1656422539454_v2_4x3.jpg",
  },
  {
    id: uuid(),
    key: 2,
    name: "Casa na Vila Madalena",
    neighbourhood: "Vila Madalena",
    city: "R$ São Paulo",
    price: "R$ 950.000,00",
    description:
      "Uma casa encantadora em um dos bairros mais boêmios e culturais de São Paulo.",
    imageUrl: "https://m.galeriadaarquitetura.com.br/Img/projeto/702x415/1377/casa-vila-madalena166.jpg",
  },
  {
    id: uuid(),
    key: 3,
    name: "Cobertura em Boa Viagem",
    neighbourhood: "Boa Viagem",
    city: "Recife",
    price: "R$ 900.000,00",
    description:
      "Uma cobertura deslumbrante com vista para a praia de Boa Viagem, ideal para quem busca conforto e elegância.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvnKy4nleFThvNhyiNXtT7N9PspOK4-64KA&s",
  },
  {
    id: uuid(),
    key: 4,
    name: "Apartamento no Batel",
    neighbourhood: "Batel",
    city: "Curitiba",
    price: "R$ 1.100.000,00",
    description:
      "Um apartamento moderno e bem localizado no bairro nobre do Batel, próximo a restaurantes e lojas.",
    imageUrl: "https://static.arboimoveis.com.br/AP0176_CWBA/apartamento-com-3-dormitorios-a-venda-96-m-por-r-942-832-00-batel-curitiba-pr1666376412935vljvx.jpg",
  },
  {
    id: uuid(),
    key: 5,
    name: "Casa no Jardim Europa",
    neighbourhood: "Jardim Europa",
    city: "São Paulo",
    price: "R$ 2.545.000,00",
    description:
      "Uma magnífica casa em um dos bairros mais exclusivos e luxuosos de São Paulo, com amplo espaço e acabamentos de alta qualidade.",
    imageUrl: "https://www.octaviocorretor.com.br/imagens/imoveis/20211112182517392963.jpeg",
  },
];

module.exports = properties;
