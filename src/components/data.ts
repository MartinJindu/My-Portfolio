import blogPic from "../assets/blog2.png";
import weatherPic from "../assets/weather2.png";
import rpsPic from "../assets/rps.png";
import adminPic from "../assets/admin.png";

export const projects = [
  {
    name: "Admin Dashboard",
    description:
      "A CRM Admin Dashboard built with React + refine + Ant design + Graphql. Features: Authorization, charts, Realtime data updates, complete CRUD operations and kanban task board with drag and drop features.",
    link: "https://crmadmin-dashboard.netlify.app/",
    img: adminPic,
    github: "https://github.com/MartinJindu/Admin-dashboard",
  },
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
