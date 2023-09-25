import { useState } from "react";
import ProductCard from "../ui/ProductCard";

const data = [
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
    brand: "hp",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
    brand: "dell",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
    brand: "acer",
  },
];

export default function Products() {
  const [isGrid, setIsGrid] = useState(true);

  const filteredData = data.filter((el) => el.brand === "hp");

  return (
    <section className="m-auto max-w-[98%]">
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
      <div
        className={
          isGrid
            ? `grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]`
            : `grid grid-cols-[1fr_1fr_1fr]`
        }
      >
        {filteredData.map((laptop) => (
          <ProductCard key={laptop.id} laptop={laptop} larger={!isGrid} />
        ))}
      </div>
    </section>
  );
}
