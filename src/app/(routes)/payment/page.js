import ProductElement from "./components/ProductElement";
import TotalPayment from "./components/TotalPayment";
import Btn from "@/components/Btn";

const Payments = () => {
  return (
    <main>
      <ProductElement />
      <TotalPayment />
      <Btn text="Betal" />
    </main>
  );
};

export default Payments;
