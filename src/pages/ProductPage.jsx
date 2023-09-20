import ProductOverview from "../components/ProductOverview";
import Products from "../components/Products";

export default function ProductPage() {
  return (
    <div className="m-auto w-[95%]">
      <ProductOverview />
      <Products />
    </div>
  );
}
