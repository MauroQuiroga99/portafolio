export type Skills = {
  id: number;
  name: string;
  icon: string;
  tech: string;
};

export const dataSkills: Skills[] = [
  {
    id: 1,
    name: "HTML & CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
    tech: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },

  {
    id: 2,
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=39853&format=png&color=000000",
    tech: " https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 3,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    tech: "https://react.dev/   ",
  },
  {
    id: 4,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    tech: "https://git-scm.com/",
  },

  {
    id: 5,
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    tech: "https://mui.com/",
  },
  {
    id: 6,
    name: "Taildwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    tech: "https://tailwindcss.com/",
  },
  {
    id: 7,
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
    tech: "https://nextjs.org/",
  },
  {
    id: 7,
    name: "Redux",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    tech: " https://redux.js.org/ ",
  },
  {
    id: 8,
    name: "Node js",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    tech: " https://nodejs.org/en/ ",
  },
  {
    id: 9,
    name: "Express",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    tech: " https://expressjs.com/ ",
  },
  {
    id: 10,
    name: "Sequalize",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
    tech: " https://sequelize.org/ ",
  },
  {
    id: 10,
    name: "Postgres SQL",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    tech: " https://www.postgresql.org/ ",
  },
];

export type Certifications = {
  id: string;
  title: string;
  name: string;
  date: string;
  icon: string;
  url: string;
};

export const dataCertifications: Certifications[] = [
  {
    id: "UC-27eddc6e-4e4a-499d-814f-e1954648e0a1",
    title: "React y TypeScript - La Guía Completa Creando +10 Proyectos",
    name: "Udemy",
    date: "Agosto 2024",
    icon: "https://www.langoly.com/wp-content/uploads/2022/09/udemy-logo.png",
    url: "https://www.udemy.com/certificate/UC-27eddc6e-4e4a-499d-814f-e1954648e0a1/",
  },

  {
    id: "2",
    title: "Curso Definitivo de HTML y CSS",
    name: "Platzi",
    date: "Enero 2024",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq4odFRbUxvuSxp1owv99ybwwEcm1UX9eI6-LVQ-GZg9sTalt33zGrnWjbV2ouI7Wg18&usqp=CAU",
    url: "https://platzi.com/p/maauro1999/curso/3468-react-router/diploma/detalle/",
  },

  {
    id: "3",
    title: "Curso de Responsive Design: Maquetación Mobile First",
    name: "Platzi",
    date: "Febrero 2024",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq4odFRbUxvuSxp1owv99ybwwEcm1UX9eI6-LVQ-GZg9sTalt33zGrnWjbV2ouI7Wg18&usqp=CAU",
    url: "https://platzi.com/p/maauro1999/curso/2030-mobile-first/diploma/detalle/",
  },
  {
    id: "4",
    title: "Curso de React.js",
    name: "Platzi",
    date: "Enero 2024",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq4odFRbUxvuSxp1owv99ybwwEcm1UX9eI6-LVQ-GZg9sTalt33zGrnWjbV2ouI7Wg18&usqp=CAU",
    url: "https://platzi.com/p/maauro1999/curso/7395-react/diploma/detalle/",
  },
  {
    id: "5",
    title: "Curso de React.js: Navegación con React Route",
    name: "Platzi",
    date: "Enero 2024",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq4odFRbUxvuSxp1owv99ybwwEcm1UX9eI6-LVQ-GZg9sTalt33zGrnWjbV2ouI7Wg18&usqp=CAU",
    url: "https://platzi.com/p/maauro1999/curso/3468-react-router/diploma/detalle/",
  },
  {
    id: "6",
    title: "Curso de TypeScript",
    name: "Platzi",
    date: "Enero 2024",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq4odFRbUxvuSxp1owv99ybwwEcm1UX9eI6-LVQ-GZg9sTalt33zGrnWjbV2ouI7Wg18&usqp=CAU",
    url: "https://platzi.com/p/mauro.quiroga/curso/2878-typescript/diploma/detalle/",
  },
];

export type Proyects = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
  git: string;
  technology: Technology[];
};

export type Technology = {
  id: number;
  name: string;
};

export const dataProyects: Proyects[] = [
  {
    id: 1,
    title: "MangaHub",
    description:
      "MangaHub is a platform built with React and Next.js for fans to explore and discuss anime and manga. ",
    date: "string;",
    image: "/proyects/proyect01.png",
    url: "https://manga-hub-bice.vercel.app/home",
    git: "https://github.com/MauroQuiroga99/MangaHub",
    technology: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Material UI" },
      { id: 4, name: "Redux" },
      { id: 1, name: "Next JS" },
    ],
  },
  {
    id: 2,
    title: "Bebidas React",
    description:
      "MangaHub is a platform built with React and Next.js for fans to explore and discuss anime and manga. ",
    date: "string;",
    image: "/proyects/proyect02.png",
    url: "https://bebidas-react-blush.vercel.app/",
    git: "https://github.com/MauroQuiroga99/bebidas-react",
    technology: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: " Axios" },
      { id: 1, name: "Vite" },
    ],
  },
  {
    id: 3,
    title: "Cotizador de Criptomonedas",
    description:
      "The cripto-app project is an application that allows users to check real-time prices of various cryptocurrencies.",
    date: "string;",
    image: "/proyects/proyect03.png",
    url: "https://cripto-app-hazel.vercel.app/",
    git: "https://github.com/MauroQuiroga99/cripto-app",
    technology: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Vite" },
    ],
  },

  {
    id: 4,
    title: "Cafeteria Next",
    description:
      "The cafeteria-next project is an app designed to manage coffee shop businesses. It provides features to handle orders, products, and business operations efficiently. ",
    date: "string;",
    image: "/proyects/proyect04.png",
    url: "https://bocchi-cafe.vercel.app/",
    git: "https://github.com/MauroQuiroga99/cafeteria-next",
    technology: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Redux" },
      { id: 4, name: "Next JS" },
      { id: 5, name: "Prisma" },
    ],
  },

  {
    id: 5,
    title: "Planificador de Gastos",
    description:
      "The control-gastos-react project is a personal finance management application built with React and TypeScript.",
    date: "string;",
    image: "/proyects/proyect05.png",
    url: "https://control-gastos-react-xi.vercel.app/ ",
    git: "https://github.com/MauroQuiroga99/control-gastos-react",
    technology: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Vite" },
    ],
  },

  {
    id: 6,
    title: "Administrador de Pacientes",
    description:
      "This project is an application designed to facilitate patient appointment management.   ",
    date: "string;",
    image: "/proyects/proyect06.png",
    url: "https://admon-pacientes.vercel.app/ ",
    git: "https://github.com/MauroQuiroga99/zustand-pacientes",
    technology: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Zustand" },
      { id: 4, name: "React Hook Form" },
    ],
  },
];
