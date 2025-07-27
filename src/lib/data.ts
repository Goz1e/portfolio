import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Canza.io",
    description:
      "Developed Canza Finance's official website with SEO optimization and Firebase-powered CMS, enabling marketing teams to manage content autonomously through secure Google firebase.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript", "Firebase"],
    status: "live",
    link: "https://canza.io",
    img: "canza.png",
    type: "web page",
  },
  {
    title: "Baki.exchange",
    description:
      "Engineered a decentralized, slippage-free exchange for synthetic African currencies on Avalanche network, featuring responsive trading interfaces and secure wallet integration.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    status: "live",
    link: "https://baki.exchange",
    img: "baki.png",
    type: "app",
  },
  {
    title: "CoinMarketCap Clone",
    description:
      "Built a functional clone of CoinMarketCap's interface with mock cryptocurrency data visualization using React and TypeScript for robust type safety.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    status: "live",
    link: "https://cmc-clone-by-gozie.netlify.app/",
    img: "cmc-clone.png",
    type: "web page",
  },
  {
    title: "Arby",
    description:
      "Created a triangular arbitrage detection system with Express.js backend for processing exchange data and Bootstrap interface for visualizing trading opportunities.",
    stack: ["JavaScript", "Express", "Bootstrap"],
    status: "code",
    link: "https://github.com/YOUR_GITHUB/arby",
    img: "canza.png",
    type: "repo",
  },
];
