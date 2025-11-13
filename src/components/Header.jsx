import Link from "next/link";

const Header = () => {
  return (
    <div className="m-2 w-full">
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/products"}>Products</Link>
      </nav>
    </div>
  );
};

export default Header;
