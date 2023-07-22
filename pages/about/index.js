import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";

//  data
const aboutData = [
  {
    title: "About Us",
    info: [
      {
        title: "About Us",
        desc: "We are a passionate team of tech enthusiasts, dedicated to engineering the future through cutting-edge solutions. With expertise in custom software development, mobile app development, digital marketing, and cybersecurity.",
      },
    ],
  },
  {
    title: "Vision",
    info: [
      {
        title: "Vision Statement",
        desc: "Empowering a connected world through innovative technology solutions.",
      },
    ],
  },
  {
    title: "Mission",
    info: [
      {
        title: "Mission Statement",
        desc: "Delivering exceptional digital experiences and driving impactful results for our clients' success.",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-primary/80 py-32 text-center h-full xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:mt-11">
        <div className="flex-1 flex flex-col">
          <Image
            src={"/about1.jpg"}
            width={500}
            height={1}
            alt="about"
            className="rounded-[20px]"
          />
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <motion.h3
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            World of &nbsp;
            <span className="text-accent">
              innovation and possibilities.
            </span>{" "}
          </motion.h3>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col max-w-max gap-x-2 text-white/60"
                >
                  <div className="font-bold mb-2 md:mb-0 text-white">
                    {item.title}
                  </div>
                  <div>{item.desc}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
