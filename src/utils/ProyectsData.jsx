import { SiReact, SiMongodb, SiMysql, SiNodedotjs } from "react-icons/si";

export const ProyectsData = [
  {
    id: 0,
    title: "Twitter Clone",
    description:
      "projects.twitter",
    imageUrl: "./img/fondotwitter.png",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiNodedotjs size="40" />
      },
      {
        icon: <SiMongodb size="40" />
      },
    ]
  },
  {
    id: 1,
    title: "Finance App",
    description:
      "projects.financeapp",
    imageUrl: "./img/fondoPokeapp.png",
    skills: [
        {
            icon: <SiReact size="40" />
        },
        {
            icon: <SiNodedotjs size="40" />
        },
        {
            icon: <SiMysql size="40" />
        },
    ]
  }
];