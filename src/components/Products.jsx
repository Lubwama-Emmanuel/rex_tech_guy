/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCard from "../ui/ProductCard";

// const data = [
//   {
//     id: 0,
//     name: "hp omen 16 (2022 amd)",
//     image: "/images/omen-22.png",
//     brand: "lenovo",
//   },
//   {
//     id: 1,
//     name: "victus 16 gaming laptop (2023 intel)",
//     image: "/images/victus-16.png",
//     brand: "hp",
//   },
//   {
//     id: 2,
//     name: "omen transcend 16 gaming laptop",
//     image: "/images/omen-transcend.png",
//     brand: "dell",
//   },
//   {
//     id: 3,
//     name: "omen 16 gaming laptop (2023 intel",
//     image: "/images/omen-intel.png",
//     brand: "acer",
//   },
// ];

export default function Products({ filter = "all products", data = [] }) {
  let filteredData;
  const [isGrid, setIsGrid] = useState(true);
  if (filter === "all products") {
    filteredData = data;
  } else {
    filteredData = data.filter((el) => el.brand === filter.toLowerCase());
  }

  return (
    <section className="m-auto max-w-[98%]">
      {filteredData.length > 0 && (
        <div className="flex space-x-2">
          <button
            className={isGrid && `text-emerald-400`}
            onClick={() => setIsGrid(true)}
          >
            G
          </button>
          <button
            className={!isGrid && `text-emerald-400`}
            onClick={() => setIsGrid(false)}
          >
            L
          </button>
          <h3>Showing {filteredData.length} product(s)</h3>
        </div>
      )}
      {filteredData.length === 0 && (
        <div className="py-10 text-center text-2xl">
          <h2>No results found for {filter} laptops</h2>
        </div>
      )}
      <div
        className={
          isGrid
            ? `grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]`
            : `grid sm:grid-cols-[1fr_1fr_1fr]`
        }
      >
        {filteredData.map((laptop) => (
          <ProductCard key={Math.random()} laptop={laptop} larger={!isGrid} />
        ))}
      </div>
    </section>
  );
}
