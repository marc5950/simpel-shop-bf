import Image from "next/image";
import Link from "next/link";

const Card = async ({ product }) => {
  return (
    <Link href={`/detalje/${product.id}`}>
      <div>
        <Image
          loading="eager"
          alt={product.title}
          src={product.thumbnail}
          width={300}
          height={200}
          className="aspect-square w-full rounded-2xl border border-black object-contain"
        />
        <h2 className="mt-5 text-center text-xl font-semibold">
          {product.title}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
