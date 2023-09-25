/* eslint-disable react/prop-types */
export default function ProductCard({ laptop, larger = false }) {
  const { name, image } = laptop;

  //

  return (
    <div
      className={
        larger
          ? `flex items-center sm:hover:scale-110`
          : `flex flex-col items-center sm:hover:scale-110`
      }
      onClick={() => console.log("clicked")}
    >
      <img src={image} className="w-64" />
      <div>
        <h3 className="sm:text-md text-center text-sm uppercase">{name}</h3>
        <h3 className="text-sm">Ugx 3,000,000</h3>
      </div>
    </div>
  );
}
