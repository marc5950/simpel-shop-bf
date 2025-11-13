import Btn from "./Btn";
import Image from "next/image";
import HeroImg from "../../public/hero.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="-mt-[104px] grid max-h-full">
      <Image
        src={HeroImg}
        alt="Hero Image"
        loading="eager"
        className="col-1 row-1 h-screen w-screen object-cover"
      />
      <div className="col-1 row-1 m-[15%] flex flex-col gap-6 place-self-start self-end rounded bg-white/50 p-12 backdrop-blur-sm">
        <h1 className="font-title text-5xl font-bold">Simpel Shop</h1>
        <Link href="/products">
          <Btn text="Se Produkter" type="normal" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
