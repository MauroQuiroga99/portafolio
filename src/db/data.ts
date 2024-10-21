export type Skills = {
  id: number;
  name: string;
  icon: string;
};

export const dataSkills: Skills[] = [
  {
    id: 1,
    name: "HTML & CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
  },

  {
    id: 2,
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=39853&format=png&color=000000",
  },
  {
    id: 3,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },

  {
    id: 5,
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    id: 6,
    name: "Taildwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 7,
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    id: 7,
    name: "Redux",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
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
