import { assest } from "../assets/assests";
const links = 
  {
    apiWhatsApp: "https://api.whatsapp.com/send/?phone=5511993850895&text&type=phone_number&app_absent=0"
  }

const texts = [
    {
      title1HomeInfo: "orem Ipsum é simplesmente",
      
      text1HomeInfo: `orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
      e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja 
      de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não 
      só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
      inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens 
      de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrôn
      ica como Aldus PageMaker.`,

      title2HomeInfo : "orem Ipsum é simplesmente",

      text2HomeInfo: `orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
  e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja 
  de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não 
  só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
  inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens 
  de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrôn
  ica como Aldus PageMaker.`
  },
    {
      location: "Onde Estamos"
    }
  ]
  const specialties = [
    {
      description: "Um cardiologista é um médico especializado no diagnóstico, tratamento e prevenção de doenças relacionadas ao coração e ao sistema circulatório. Eles cuidam de problemas como doença cardíaca coronária, hipertensão, insuficiência cardíaca e arritmias cardíacas.",
      name: "Cardiologista",
      image: assest.image1,
    },
    {
      description:
      "O clínico geral, também conhecido como médico de família, trata uma ampla variedade de problemas de saúde em pacientes de todas as idades. Eles são geralmente o primeiro ponto de contato para problemas de saúde e fazem diagnósticos iniciais, encaminham para especialistas quando necessário e oferecem cuidados preventivos.",
      name: "Clínico Geral",
      image: assest.image1,
    },
    {
      description:
      "Os endocrinologistas são especializados no tratamento de distúrbios hormonais. Eles cuidam de condições como diabetes, doenças da tireoide, obesidade, distúrbios hormonais e muitos outros problemas relacionados às glândulas endócrinas.",
      name: "Endócrinologista",
      image: assest.image1,
    },
    {
      description:
      "Um nutricionista é um profissional de saúde especializado em nutrição e dieta. Eles ajudam as pessoas a melhorar sua saúde por meio de orientação alimentar. Isso pode envolver a criação de planos de dieta personalizados, tratando distúrbios alimentares, fornecendo educação nutricional e promovendo uma alimentação saudável.",
      name: "Nutricionista",
      image: assest.image1,
    },
    {
      description:
      "Os pneumologistas são especializados no diagnóstico e tratamento de doenças pulmonares e respiratórias. Eles tratam condições como asma, bronquite crônica, enfisema, pneumonia, apneia do sono e outras doenças que afetam os pulmões e o sistema respiratório.",
      name: "Pneumologista",
      image: assest.image1,
    }
  ];

export const constants = {
  links,
  texts,
  specialties
}

