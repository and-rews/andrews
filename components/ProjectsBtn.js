import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion, useAnimation } from "framer-motion";

// Custom hook for creating interval loops
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const ProjectsBtn = () => {
  // const buttonAnimation = useAnimation();

  // Define the animation steps
  // const animateButton = async () => {
  //   await buttonAnimation.start({ scale: 1.1, opacity: 1 });
  //   await buttonAnimation.start({ scale: 1, opacity: 0.8 });
  //   await buttonAnimation.start({ scale: 1.1, opacity: 1 });
  //   await buttonAnimation.start({ scale: 1, opacity: 1 });
  // };

  // // Start the animation loop using useInterval
  // useInterval(() => {
  //   animateButton();
  // }, 2000); // Change the interval duration as needed

  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/work"}>
        <motion.button
          className="flex items-center w-full h-full max-w-[161px] max-h-[148px] bg-accent pl-4 pr-4 py-2 rounded"
          // initial={{ scale: 1, opacity: 1 }}
          // animate={buttonAnimation}
        >
          Contact Us <HiArrowRight className="pl-1 text-2xl" />
        </motion.button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
