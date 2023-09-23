import Hero from "../components/Hero";
import FilterButton from "../ui/FilterButton";
import Products from "../components/Products";

export default function AllProductsPage() {
  return (
    <section>
      <Hero />
      <ProductsSection />
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="m-auto max-w-[98%]">
      <Filters />
      <ProductsList />
    </section>
  );
}

function Filters() {
  return (
    <div className="flex justify-between">
      <FilterButton isActive={true}>All products</FilterButton>
      <FilterButton>Gaming</FilterButton>
      <FilterButton>Designing</FilterButton>
      <FilterButton>Education</FilterButton>
      <FilterButton>Touch screen</FilterButton>
      <FilterButton>4K</FilterButton>
      <FilterButton>360</FilterButton>
      <FilterButton>GPU</FilterButton>
      <FilterButton>Brand new</FilterButton>
      <FilterButton>Refurbrished</FilterButton>
    </div>
  );
}

function ProductsList() {
  return (
    <div className="">
      <Products />
    </div>
  );
}
