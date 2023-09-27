import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import ProductsSection from "../ui/ProductsSection";

const DellFilters = [
  {
    id: 0,
    filter: "Dell",
  },
  {
    id: 1,
    filter: "xps",
  },
  {
    id: 2,
    filter: "precision",
  },
  {
    id: 3,
    filter: "latitude",
  },
  {
    id: 4,
    filter: "inspiron",
  },
  {
    id: 5,
    filter: "2 in 1",
  },
  {
    id: 6,
    filter: "touch screen",
  },
  {
    id: 7,
    filter: "gaming",
  },
  {
    id: 8,
    filter: "gpu",
  },
  {
    id: 9,
    filter: "11th gen",
  },
  {
    id: 10,
    filter: "12th gen",
  },
];

export default function DellLaptops() {
  const data = useLoaderData();
  return (
    <div>
      <Hero />
      <ProductsSection data={data} filters={DellFilters} />
    </div>
  );
}
