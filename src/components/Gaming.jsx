import ComponentHead from "../ui/ComponentHead";
import ProductCard from "../ui/ProductCard";

const data = [
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    mainImage: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    mainImage: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    mainImage: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    mainImage: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    mainImage: "/images/omen-16.png",
  },
];

export default function Gaming() {
  return (
    <section className="m-auto mb-20 w-[95%]">
      <ComponentHead title={"gaming"} link={"/products/gaming"} />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
        {data.map((el) => (
          <ProductCard key={el.id} laptop={el} />
        ))}
      </div>
    </section>
  );
}
