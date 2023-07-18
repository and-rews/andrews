import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import fadein from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div>
        <div>
          <h1 className="h1">
            Engineering The Future
            <br /> <span className="text-accent">One Line At A Time.</span>
          </h1>
          <p>
            Through meticulous precision and craftsmanship, I engineer the
            future, revolutionizing industries and transforming ideas into
            extraordinary digital experiences.
          </p>
        </div>
      </div>
      <div>image</div>
    </div>
  );
};

export default Home;
