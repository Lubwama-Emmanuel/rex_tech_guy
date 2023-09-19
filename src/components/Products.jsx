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
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
  {
    id: 0,
    name: "hp omen 16 (2022 amd)",
    image: "/images/omen-22.png",
  },
  {
    id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    image: "/images/victus-16.png",
  },
  {
    id: 2,
    name: "omen transcend 16 gaming laptop",
    image: "/images/omen-transcend.png",
  },
  {
    id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    image: "/images/omen-intel.png",
  },
  {
    id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    image: "/images/omen-16.png",
  },
];

export default function Products() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(217px,_1fr))]">
      {data.map((laptop) => (
        <ProductCard key={laptop.id} laptop={laptop} />
      ))}
    </div>
  );
}
