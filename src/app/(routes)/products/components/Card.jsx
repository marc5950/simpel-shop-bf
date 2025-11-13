import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/Btn";

const Card = async ({ product }) => {
  return (
    <Link href={`/detalje/${product.id}`}>
      <div className="bg-bg2 rounded-2xl px-8 py-7 shadow-lg">
        <Image
          loading="eager"
          alt={product.title}
          src={product.thumbnail}
          width={300}
          height={200}
          className="bg-bg aspect-square w-full rounded-2xl object-contain"
        />
        <div className="grid items-center gap-5">
          <h2 className="mt-5 text-center text-xl font-semibold">
            {product.title}
          </h2>
          <Btn text="Læg i kurv" type="normal" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
