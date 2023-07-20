import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[200px] absolute -right-16 -bottom-2 mix-blend-color-dodge">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circles"
      />
    </div>
  );
};

export default Circles;
