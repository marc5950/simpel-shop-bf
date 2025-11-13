import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/products"}>Products</Link>
      </nav>
    </div>
  );
};

export default Header;
