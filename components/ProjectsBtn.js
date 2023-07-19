import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/work"}>
        <button className=" flex items-center w-full h-full max-w-[161px] max-h-[148px] bg-accent pl-4 pr-4 py-2 rounded">
          Contact Us <HiArrowRight className="pl-1 text-2xl" />
        </button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
