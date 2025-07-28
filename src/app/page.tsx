"use client";
import Image from "next/image";
import { projects } from "@/lib/data";
import { Project } from "@/lib/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFirebaseLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaGithub, FaRegEye } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { RiTelegram2Line } from "react-icons/ri";
import { RiCalendarCheckFill } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";

import { FaReact } from "react-icons/fa";
import { cn } from "@/lib/utils";

import { ReactElement, useEffect, useState } from "react";
import { LuEyeClosed } from "react-icons/lu";

const stackIconMap: Record<string, ReactElement> = {
  "Next.js": <TbBrandNextjs />,
  "Tailwind CSS": <TbBrandTailwind />,
  python: <AiOutlinePython />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Firebase: <RiFirebaseLine />,
  Firestore: <RiFirebaseLine />,
  Express: <SiExpress />,
  Bootstrap: <BsBootstrap />,
  React: <FaReact />,
};

const previewMap: Record<string, ReactElement> = {
  "Canza.io": (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="https://res.cloudinary.com/dpboshzzm/image/upload/v1753688835/Screenshot_2025-07-26_at_11.03.12_PM_twcsnl.png"
      className="w-full h-full max-w-full object-cover object-top absolute top-0 inset-0"
    >
      <source
        src="https://res.cloudinary.com/dpboshzzm/video/upload/q_auto,f_auto/v1753641177/canza_onsex8.mov"
        type="video/mp4"
      />
    </video>
  ),
  "Baki.exchange": (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="https://res.cloudinary.com/dpboshzzm/image/upload/v1753688834/Screenshot_2025-07-26_at_11.02.57_PM_gkl2e6.png"
      className="w-full h-full max-w-full object-cover object-top absolute top-0 inset-0"
    >
      {" "}
      <source
        src="https://res.cloudinary.com/dpboshzzm/video/upload/q_auto,f_auto/v1753641175/baki_hugnvo.mov"
        type="video/mp4"
      />
    </video>
  ),
  "CoinMarketCap Clone": (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="https://res.cloudinary.com/dpboshzzm/image/upload/v1753688836/Screenshot_2025-07-26_at_11.03.54_PM_hglsvz.png"
      className="w-full h-full max-w-full object-cover object-top absolute top-0 inset-0"
    >
      {" "}
      <source
        src="https://res.cloudinary.com/dpboshzzm/video/upload/q_auto,f_auto/v1753641178/cmc-clone_whhvrr.mov"
        type="video/mp4"
      />
    </video>
  ),
};
const words = ["ui", "js", "sol", "py", "ts"];
const typingSpeed = 150;
const pauseTime = 15000;

export default function Home() {
  const [activeProject, setActiveProject] = useState<
    "Canza.io" | "Baki.exchange" | "CoinMarketCap Clone" | "Arby" | null
  >(null);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      // Move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, deleting]);

  return (
    <div className="font-mono flex flex-col items-center-safe min-h-screen space-y-4 w-full p-8 pb-20 sm:p-20 scroll-smooth ">
      <main className=" gap-[32px] max-w-[80rem] row-start-2 items-center sm:items-start space-y-4">
        <div className="w-full  p-6  text-center text-3xl lg:text-6xl font-mono">
          {`<GOZIE.`}
          <span>{words[index].substring(0, subIndex)}</span>
          {`/>`}
          <p className="text-lg mt-4">Nwachukwu Emmanuel Chigozie.</p>
          <p className="text-sm ">Front-end projects</p>
        </div>
        <div className="size-full grid grid-flow-row lg:grid-cols-2 gap-6 md:gap-3 ">
          {projects.map((project: Project) => (
            <Card
              key={project.title}
              onMouseLeave={() => {
                setTimeout(() => {
                  setActiveProject(null);
                }, 300);
              }}
              className={cn(
                activeProject === project.title &&
                  "aspect-video z-20 transition-all duration-300 border-solid",
                "relative"
              )}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription></CardDescription>
                <CardAction>
                  {project.type === "web page" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inline-flex gap-2 items-center group/title text-sm font-medium">
                        <Image
                          src={
                            "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnBlaWRxcjB0YTdidHp5YngzM2g2Y244bXdlam1pNW50cDl3em1reSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9ZQ/e0Uiyu70TXQAALdKP9/giphy.gif"
                          }
                          height={20}
                          width={20}
                          alt="globe"
                          className="grayscale-100 opacity-0 group-hover/title:opacity-100 transition-all duration-300 translate-x-2 group-hover/title:translate-x-0"
                        />
                        Visit page
                      </div>
                    </a>
                  )}
                  {project.type === "app" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inline-flex gap-2 items-center group/title text-sm font-medium">
                        <Image
                          src={"/icons8-bot.gif"}
                          height={20}
                          width={20}
                          alt="globe"
                          unoptimized
                          className="grayscale-100 opacity-0 group-hover/title:opacity-100 transition-all duration-300 translate-x-2 group-hover/title:translate-x-0"
                        />
                        Visit app
                      </div>
                    </a>
                  )}
                  {project.type === "repo" && (
                    <div className="inline-flex gap-2 items-center group/title text-sm font-medium">
                      <Image
                        src={"/icons8-github.gif"}
                        height={20}
                        width={20}
                        alt="globe"
                        unoptimized
                        className="grayscale-100 opacity-0 group-hover/title:opacity-100 transition-all duration-300 translate-x-2 group-hover/title:translate-x-0"
                      />
                      View repo
                    </div>
                  )}
                </CardAction>
              </CardHeader>
              <CardContent className="">
                {project.description}
                {activeProject === project.title &&
                  previewMap[activeProject || ""]}
              </CardContent>
              <CardFooter>
                <div className="inline-flex items-center gap-2 flex-wrap-reverse grow mt-auto">
                  {project.stack.map((stack) => (
                    <div
                      key={`${project.title}-${stack}`}
                      className={cn(
                        "inline-flex items-center gap-2 border border-dashed border-black px-2 py-1 text-sm font-medium transition-all duration-300"
                        // "w-0 opacity-0 translate-x-1",
                        // `group-hover/card-body:w-auto group-hover/card-body:opacity-100 group-hover/card-body:translate-x-0`,
                        // `delay-${100 + 50 * index}` // only apply delay on enter
                      )}
                    >
                      {stackIconMap[stack] && (
                        <span className="text-base">{stackIconMap[stack]}</span>
                      )}
                      <span>{stack}</span>
                    </div>
                  ))}
                </div>
                {project.type !== "repo" && (
                  <div
                    className={cn(
                      "p-1 h-7 z-30 aspect-square inline-flex items-center mt-auto bg-black/10 gap-2 border border-dashed border-black cursor-zoom-in",
                      "grayscale-100 md:opacity-0 group-hover/card-body:opacity-100 transition-all duration-300 md:translate-x-2 group-hover/card-body:translate-x-0 delay-200",
                      activeProject === project.title && "cursor-zoom-out"
                    )}
                    onClick={() => {
                      setActiveProject((prev) =>
                        prev == project.title ? null : project.title
                      );
                    }}
                  >
                    {" "}
                    {activeProject !== project.title ? (
                      <FaRegEye />
                    ) : (
                      <LuEyeClosed />
                    )}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] w-full max-w-[80rem] flex-wrap items-center justify-center h-fit p-4 border border-dashed border-black bg-black/10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="t.me/Goxzie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegram2Line className="h-6" size={20} />
          Direct Message
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="phenominal55@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          type="email"
        >
          <MdOutlineEmail className="h-6" size={20} />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://calendar.google.com/calendar/u/0?cid=cGhlbm9taW5hbDU1QGdtYWlsLmNvbQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiCalendarCheckFill className="h-6" size={20} />
          Schedule a meeting
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Goz1e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6" size={20} />
          Github
        </a>
      </footer>
    </div>
  );
}
