import { useLoaderData } from "react-router-dom";
import ProductOverview from "../components/ProductOverview";
import Products from "../components/Products";

export default function ProductPage() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="m-auto w-[95%]">
      <ProductOverview laptop={data} />
      <Products />
    </div>
  );
}
