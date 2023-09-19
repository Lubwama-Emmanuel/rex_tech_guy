import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({ laptop }) {
  const { name, image } = laptop;

  return (
    <div
      className="flex flex-col items-center hover:scale-110"
      onClick={() => <NavLink to="/products/gaming/omen" />}
    >
      <img src={image} className="w-64" />
      <h3 className="uppercase">{name}</h3>
      <h3>Ugx 3,000,000</h3>
    </div>
  );
}
