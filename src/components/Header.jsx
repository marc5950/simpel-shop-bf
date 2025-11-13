import Link from "next/link";

const Header = () => {
  return (
    <div className="z-10">
      <nav>
        <ul className="bg-bg2 mx-10 mt-4 mt-10 flex gap-4 rounded p-4">
          <li>
            <Link href={"/"}>Hjem</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
