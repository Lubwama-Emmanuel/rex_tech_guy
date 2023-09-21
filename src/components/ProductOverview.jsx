/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import Button from "../ui/Button";

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
];

export default function ProductOverview() {
  const [activeImage, setActiveImage] = useState(data[0].image);
  const [activeContainer, setActiveContainer] = useState(0);

  function handleMouseEnter(newImage, index) {
    setActiveContainer(index);
    setActiveImage(newImage);
  }

  return (
    <div className="mx-auto my-10 grid w-[90%] grid-cols-[1fr_2fr] items-center gap-10">
      <div className="">
        <img src={activeImage} className="w-80" />
        <div className="grid w-[90%] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]">
          {data.map((laptop, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(laptop.image, index)}
              className={
                activeContainer === index
                  ? `flex justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800`
                  : `flex justify-center rounded-md  hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800`
              }
              key={laptop.id}
            >
              <img src={laptop.image} className="w-20" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold capitalize">omen 17 gaming laptop</h2>
        <h3 className="text-2xl font-medium capitalize">details:</h3>
        <p className="text-xl">
          Up to Intel® Core™ i9-11900HX (up to 5.4 GHz with Intel® Turbo
          Boost Technology(2g), 36 MB L3 cache, 24 cores, 32 threads)​ Up to
          NVIDIA® GeForce RTX™ 3080 Laptop GPU (16 GB GDDR6 dedicated) powered
          by NVIDIA DLSS 3, ultra-efficient Ada Lovelace architecture, and Max-Q
          Technologies.​ Up to 32 GB DDR5-5600 MHz RAM (2 x 16 GB)​ Up to 1 TB
          PCIe® Gen4 NVMe™ TLC M.2 SSD
        </p>
        <h3 className="text-xl ">Ugx 3,000,000</h3>
        <div className="space-x-3">
          <Button>add to cart</Button>
          <Button>shop</Button>
        </div>
      </div>
    </div>
  );
}
