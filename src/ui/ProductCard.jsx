import { Navigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({ laptop, larger = false }) {
  const { name, mainImage, _id: id } = laptop;

  return (
    <div
      // className="grid grid-cols-[repeat(auto-fit_min-max(100px_1fr))] grid-rows-[3fr_1fr] gap-cols-2"
      className={
        larger
          ? `flex items-center sm:hover:scale-110`
          : `flex flex-col items-center sm:hover:scale-110`
      }
      onClick={() => <Navigate to={`/products/${id}`} />}
    >
      <div className="flex items-center justify-center">
        <img src={mainImage} className="w-32 sm:w-64" />
      </div>
      <div className="">
        <h3 className="sm:text-md text-center text-sm uppercase">{name}</h3>
        <h3 className="text-sm">Ugx 3,000,000</h3>
        {/* <Link to={`/products/${id}`}>To</Link> */}
      </div>
    </div>
  );
}
