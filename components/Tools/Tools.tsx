"use client";

import { useState } from "react";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiSketch,
} from "react-icons/si";
import {
  siFigma,
  siSketch,
  siHtml5,
  siCss3,
  siJavascript,
  siNodedotjs,
  siMongodb,
} from "simple-icons";

interface Tools {
  icon: React.ReactNode;
  name: string;
}

export default function Tools() {
  const [selected, setSelected] = useState<"design" | "dev">("design");

  const designTools = [
    {
      icon: <SiSketch className="size-8" color={`#${siSketch.hex}`} />,
      name: "Sketch",
    },
    {
      icon: <SiFigma className="size-8" color={`#${siFigma.hex}`} />,
      name: "Figma",
    },
    { icon: <SiAdobexd className="size-8" color={``} />, name: "Adboe XD" },
    {
      icon: <SiAdobephotoshop className="size-8" color={``} />,
      name: "Adobe Photoshop",
    },
    {
      icon: <SiAdobeillustrator className="size-8" color={``} />,
      name: "Adobe Illustrator",
    },
  ];
  const devTools = [
    {
      icon: <SiHtml5 className="size-8" color={`#${siHtml5.hex}`} />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 className="size-8" color={`#${siCss3.hex}`} />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript className="size-8" color={`#${siJavascript.hex}`} />,
      name: "Javascript",
    },
    {
      icon: <SiNodedotjs className="size-8" color={`#${siNodedotjs.hex}`} />,
      name: "Node Js",
    },
    {
      icon: <SiMongodb className="size-8" color={`#${siMongodb.hex}`} />,
      name: "MongoDB",
    },
  ];

  const toolsToRender = selected === "design" ? designTools : devTools;

  return (
    <div className="space-y-8 sm:space-y-12 xl:space-y-16 px-8">
      <div className="tools-btn-container bg-black/10">
        <button
          data-testid="tools-design-btn"
          onClick={() => setSelected("design")}
          className={
            selected === "design" ? "tools-active-btn" : "tools-inactive-btn"
          }
        >
          Tools I Use for Design
        </button>
        <button
          data-testid="tools-dev-btn"
          onClick={() => setSelected("dev")}
          className={
            selected === "dev" ? "tools-active-btn" : "tools-inactive-btn"
          }
        >
          Tools I Use for Development
        </button>
      </div>

      <div className="tools-list">
        {toolsToRender.map((d: Tools, i: number) => (
          <div key={i} className=" ">
            {d.icon}
            <p className="P_semibold-phone">{d.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
