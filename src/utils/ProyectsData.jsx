import { SiReact, SiMongodb, SiMysql, SiNodedotjs } from "react-icons/si";

export const ProyectsData = [
  {
    id: 0,
    title: "Twitter Clone",
    description: "projects.twitter",
    url:"https://twitterclone-av6b-dev.fl0.io/",
    coverImage: "./img/fondotwitter.png",
    appImage: "./img/twitterweb.png",
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
    description: "projects.financeapp",
    url:"",
    coverImage: "./img/fondoFinanceapp.png",
    appImage: "./img/financeappweb.gif",
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