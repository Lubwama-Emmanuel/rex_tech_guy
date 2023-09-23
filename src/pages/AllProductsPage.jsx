/* eslint-disable react/prop-types */
import Hero from "../components/Hero";
import FilterButton from "../ui/FilterButton";
import Products from "../components/Products";
import { useEffect, useState } from "react";

export default function AllProductsPage() {
  const [isFilterToTop, setIsFilterToTop] = useState(false);
  useEffect(() => {
    // Function to be handling scrolling event
    const handleScroll = () => {
      const scrollY = window.scrollY;

      console.log(scrollY);

      if (scrollY === 400) {
        console.log("reached");
        setIsFilterToTop(true);
      } else if (scrollY < 400) {
        setIsFilterToTop(false);
      }
    };

    // Adding acroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleaning up th event lsitener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Hero />
      <h2 className="mb-5 text-center text-5xl text-emerald-600">
        Which laptop is right for you?
      </h2>
      <ProductsSection isFilterToTop={isFilterToTop} />
    </section>
  );
}

function ProductsSection({ isFilterToTop }) {
  return (
    <section className="m-auto max-w-[98%]">
      <Filters isFilterToTop={isFilterToTop} />
      <ProductsList />
    </section>
  );
}

function Filters({ isFilterToTop }) {
  const base = `flex gap-2 sm:gap-5 overflow-x-auto justify-between py-7 bg-white`;
  return (
    <div
      className={
        isFilterToTop ? `${base} fixed left-0 right-0 top-14 z-20` : base
      }
    >
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
