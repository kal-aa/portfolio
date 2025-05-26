"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function FQA() {
  const [openFqaI, setOpenFqaI] = useState(-1);

  const fqas = [
    {
      title: "What timezone are you in?",
      body: "I'm based in the East Africa Time (EAT) zone, which is UTC+3. I’m flexible with time and can adjust to your working hours for smooth communication and collaboration.",
    },
    {
      title: "How much do you charge for a website?",
      body: "My pricing varies based on the scope and complexity of the website. I usually provide a flat rate after understanding your project requirements, ensuring there are no surprise costs.",
    },
    {
      title: "Do you charge by the hour?",
      body: "No, I prefer charging a flat fee per project. This removes the stress of tracking hours and lets us focus fully on delivering great results without rushing or overbilling.",
    },
    {
      title: "Do we make a contract?",
      body: "Yes, for every project, I provide a simple contract outlining the deliverables, timeline, and payment terms. It helps set clear expectations and protects both sides.",
    },
    {
      title: "Are you working with a team?",
      body: "I'm currently working solo as a freelance developer, but I do collaborate with other professionals when needed — such as designers or developers — depending on your project needs.",
    },
  ];

  const handleClick = (i: number) => {
    setOpenFqaI(openFqaI === i ? -1 : i);
  };

  return (
    <section className="fqa-container">
      <p className="H4_light-phone H4_light-tablet H4_light-laptop">
        Before sending me a message, here are some things you should know:
      </p>

      <main>
        {fqas.map((f, i) => (
          <section data-testid="fqa" key={i}>
            <div className="flex items-center space-x-4">
              <div className="relative size-4">
                <FaPlus
                  data-testid={`plus-icon-${i}`}
                  onClick={() => handleClick(i)}
                  className={`secondary plus-minus ${
                    openFqaI === i
                      ? "opacity-0 scale-75"
                      : "opacity-100 scale-100"
                  }`}
                />
                <FaMinus
                  data-testid={`minus-icon-${i}`}
                  onClick={() => handleClick(i)}
                  className={`secondary plus-minus ${
                    openFqaI === i
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                />
              </div>

              <div
                onClick={() => handleClick(i)}
                className={`P_semibold-phone  cursor-pointer ${
                  openFqaI === i ? "text-black/75" : ""
                }`}
              >
                {f.title}
              </div>
            </div>
            <div
              className="P_xs-phone pl-10"
              style={{ display: openFqaI === i ? "block" : "none" }}
            >
              {f.body}
            </div>
          </section>
        ))}
      </main>
    </section>
  );
}

export default React.memo(FQA);
