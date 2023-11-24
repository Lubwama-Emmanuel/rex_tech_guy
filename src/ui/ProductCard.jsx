import { Navigate } from "react-router-dom";
import Button from "./Button";

/* eslint-disable react/prop-types */
export default function ProductCard({ laptop, larger = false }) {
  const { name, mainImage, _id: id } = laptop;

  return (
    <div
      className={
        larger
          ? `flex items-center border-emerald-900 sm:hover:border`
          : `flex flex-col items-center rounded-xl border-emerald-400 p-5 sm:hover:border`
      }
      onClick={() => <Navigate to={`/products/${id}`} />}
    >
      <div className="flex items-center justify-center">
        <img src={mainImage} className="w-32 sm:w-64" />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="sm:text-md text-center text-sm uppercase">{name}</h3>
        <h3 className="text-sm">Ugx 3,000,000</h3>
        <div className="flex justify-center gap-5 text-center">
          <Button>{"shop"}</Button>
          <Button>{"Checkout"}</Button>
        </div>
      </div>
    </div>
  );
}
