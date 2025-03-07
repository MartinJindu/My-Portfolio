import blogPic from "../assets/blog2.png";
import weatherPic from "../assets/weather2.png";
import rpsPic from "../assets/rps.png";

export const projects = [
  {
    name: "Story Flow Blog",
    description:
      "A Robust blogging platform built with Next.js, Tailwind CSS, Prisma ORM, Redux-toolkit and more. Contains authentication (Next Auth) and a Rich content editor(TipTap). Modern UI/UX design and database integration with Neon PostgresSQL",
    link: "https://story-flow-blog-app.vercel.app/",
    img: blogPic,
    github: "https://github.com/MartinJindu/Story-Flow-Blog-App",
  },
  {
    name: "Weather Api App",
    description:
      "A functional weather app built with React. It fetches weather data from an api and displays information on the city provided. Background also dynamically change according to weather status.",
    link: "https://weather-api-app-reactt.netlify.app/",
    img: weatherPic,
    github: "https://github.com/MartinJindu/react-weather-app",
  },
  {
    name: "Rock Paper Scissors",
    description: "A fun interactive game to play with the computer",
    link: "https://rockpaper-scissors-g.netlify.app/",
    img: rpsPic,
    github: "https://github.com/MartinJindu/Rock-Paper-Scissors",
  },
];
