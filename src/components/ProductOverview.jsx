import { useState } from "react";

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
];

export default function ProductOverview() {
  const [activeImage, setActiveImage] = useState(data[0].image);

  function handleMouseEnter(newImage) {
    setActiveImage(newImage);
  }
  return (
    <div>
      <div className="w-96">
        <img src={activeImage} className="w-96" />
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]">
          {data.map((laptop) => (
            <div
              onMouseEnter={() => handleMouseEnter(laptop.image)}
              className="rounded-md hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800"
              key={laptop.id}
            >
              <img src={laptop.image} className="w-32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
