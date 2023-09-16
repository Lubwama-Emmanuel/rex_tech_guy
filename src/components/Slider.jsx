/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import data from "../../data";
import Button from "../ui/Button";

const laptops = data;

export default function Slider({ laptop }) {
  const [selected, setSelected] = useState(0);

  const { name, photo, tagline, make } = data[selected];

  function nextImage() {
    if (selected === laptops.length - 1) {
      setSelected(0);
    } else {
      setSelected((value) => value + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  });
  return (
    <div className="m-auto max-w-[95%] ">
      <div className="grid  grid-cols-2 py-10 ">
        <div className="flex flex-col items-start justify-center space-y-3">
          <h3 className="text-sm font-light uppercase tracking-widest">
            new product
          </h3>
          <h2 className="text-5xl uppercase">
            {name}
            <br></br>
            {make}
          </h2>
          <h3 className="text-2xl">{tagline}</h3>
          <div className="space-x-5">
            <Button>learn more</Button>
            <Button>shop</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={photo} className="w-3/4" />
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={
              index === selected
                ? `h-2 w-12 rounded-lg bg-emerald-800 `
                : `h-2 w-5 rounded-lg border border-emerald-800 `
            }
            onClick={() => setSelected(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
