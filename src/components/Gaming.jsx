import ComponentHead from "../ui/ComponentHead";
import ProductCard from "../ui/ProductCard";

export default function Gaming() {
  return (
    <section className="m-auto w-[95%]">
      <ComponentHead />
      <div className="flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
