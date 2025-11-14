import ProductElement from "./components/ProductElement";
import TotalPayment from "./components/TotalPayment";

const Payments = () => {
  return (
    <main className="m-10">
      {/* Responsive layout: column på små skærme, row på store skærme */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        {/* Product liste (venstre side på store skærme) */}
        <div className="flex-1">
          <ProductElement />
        </div>

        {/* Total payment box (højre side på store skærme, under på små) */}
        <div className="w-full lg:w-[400px]">
          <TotalPayment />
        </div>
      </div>
    </main>
  );
};

export default Payments;
