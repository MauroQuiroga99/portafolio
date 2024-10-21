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
  id: number;
  title: string;
  name: string;
  date: string;
  icon: string;
  url: string;
};

export const dataCertifications: Certifications[] = [
  {
    id: 1,
    title: "React y TypeScript - La Guía Completa Creando +10 Proyectos",
    name: "Udemy",
    date: "Agosto 2024",
    icon: "https://static.vecteezy.com/system/resources/previews/046/437/277/non_2x/udemy-transparent-logo-free-png.png",
    url: "https://www.udemy.com/certificate/UC-27eddc6e-4e4a-499d-814f-e1954648e0a1/",
  },

  {
    id: 2,
    title: "React y TypeScript - La Guía Completa Creando +10 Proyectos",
    name: "Platzi",
    date: "Agosto 2024",
    icon: "https://static.vecteezy.com/system/resources/previews/046/437/277/non_2x/udemy-transparent-logo-free-png.png",
    url: "https://www.udemy.com/certificate/UC-27eddc6e-4e4a-499d-814f-e1954648e0a1/",
  },
];
