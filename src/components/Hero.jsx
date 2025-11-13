import Btn from "./Btn";
import Image from "next/image";
import HeroImg from "../../public/hero.jpg";

const Hero = () => {
  return (
    <section className="-mt-[103px] grid max-h-full">
      <Image
        src={HeroImg}
        alt="Hero Image"
        loading="eager"
        className="col-1 row-1 h-full"
      />
      <div className="bg-bg2 col-1 row-1 m-24 place-self-start self-end rounded p-6">
        <h1 className="">Simpel Shop</h1>
        <Btn text="Se Produkter" />
      </div>
    </section>
  );
};

export default Hero;
