import image1 from '../assets/images/c-15.webp';
import image2 from '../assets/images/c-3.webp';
import image3 from '../assets/images/c-7.webp';

const CarouselHomeData = [
  {
    title: "Grupo ",
    titlespan: "GCÓR",
    p1:"O Grupo GCÓR tem seu foco na saúde com uma trajetória notável que remonta à década de 1970.",
    p2:"Sua dedicação à saúde integral do paciente, combinada com marcos pioneiros, como a criação de um dos primeiros pronto-socorros do país, a tornaram uma referência no cuidado médico.",
    p3: "A GCÓR continua a ser um parceiro valioso na promoção da saúde de mais de 1 milhão de pacientes.",
    link: "/sobre",
    buttonName: "SOBRE NÓS",
    src: image1,
    alt: "Imagem 1"
  },
  {
    title: "Exames",
    titlespan: "GCÓR",
    p1:"Na GCÓR, nossa missão é oferecer o mais alto padrão de cuidado e precisão médica",
    p2:"Com uma equipe dedicada de profissionais de saúde e equipamentos de última geração, realizamos uma ampla variedade de exames para garantir sua saúde e bem-estar.",
    p3: "Venha conhecer a GCÓR e experimente a diferença da atenção médica de qualidade. Seu bem-estar merece o melhor.",
    link: "/exames",
    buttonName: "NOSSOS EXAMES",
    src: image2,
    alt: "Imagem 2"
  },
  {
    title: "",
    titlespan: "Corpo Clínico",
    p1:"Nos orgulhamos de contar com uma equipe excepcional de profissionais de saúde altamente qualificados e dedicados.",
    p2:"Na GCÓR, acreditamos que a qualidade do nosso atendimento começa com as pessoas que fazem parte da nossa equipe. Estamos aqui para cuidar de você e da sua saúde, trazendo confiança e tranquilidade em cada visita.",
    p3: "Eles estão constantemente atualizados com as últimas pesquisas e avanços médicos para garantir que você receba o tratamento mais avançado e eficaz.",
    link: "/corpoclinico",
    buttonName: "CONHEÇA NOSSA EQUIPE",
    src: image3,
    alt: "Imagem 3"
  }
];

export const testimonials = [
  {
    testimonial:
      "I highly recommendasdas web application development and their ability to create robust and complete applications.",
    name: "Eliana Colucci",
    rating: "5",
    doctor: "Eleni Nathanailidis",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Yuri has the ability to identify and address complex technical issues, as well as his expertise in data analysis and system integration.",
    name: "Renan Araujo",
    rating: "5",
    doctor: "Walter Moras Junior",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "His proficiency in front-end technologies and design principles make him an invaluable asset to any web development project.",
    name: "Gabriela Melo",
    rating: "5",
    doctor: "Maristela Oliveira",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
export default CarouselHomeData;