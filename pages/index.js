import React, { useEffect, useState } from "react";
import ProjectsBtn from "../components/ProjectsBtn";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const sentences = [
    "Empowering the Digital Frontier.\nCustom Software Development Excellence...",
    "Navigating Success Together.\nAccelerating Growth through Marketing...",
    "Safeguarding Your Digital World.\nFortifying Cybersecurity Peace of Mind...",
  ];

  useEffect(() => {
    let currentCharIndex = 0;
    let reverse = false;
    let interval;

    const typingEffect = () => {
      const currentText = sentences[currentSentenceIndex].slice(
        0,
        currentCharIndex + 1
      );
      setTypedText(currentText);

      if (!reverse) {
        currentCharIndex++;
        if (currentCharIndex === sentences[currentSentenceIndex].length) {
          reverse = true;
          clearInterval(interval);
          setTimeout(() => {
            reverse = false;
            currentCharIndex = 0;
            setCurrentSentenceIndex((prevIndex) =>
              prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
            );
          }, 2000);
        }
      }
    };

    interval = setInterval(typingEffect, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentSentenceIndex]);

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {typedText.split("\n")[0]}
            <br />
            <span className="text-accent" style={{ fontSize: "2rem" }}>
              {typedText.split("\n")[1]}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            With exceptional attention to detail and skillful artistry, I shape
            the future, driving innovation in various sectors while bringing
            extraordinary digital experiences to life.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
