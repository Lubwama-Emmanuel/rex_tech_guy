export default function Brands() {
  return (
    <section className="my-20 text-center">
      <h3 className="mb-5 text-2xl">Supported brands</h3>
      <div className=" flex items-center justify-center space-x-10">
        <img
          src="/images/lenovo.svg"
          className="w-24 transition-all duration-300 hover:scale-150"
        />
        <img
          src="/images/hp.png"
          className="w-24 transition-all duration-300 hover:scale-150"
        />
        <img
          src="/images/acer.png"
          className="w-24 transition-all duration-300 hover:scale-150"
        />
      </div>
    </section>
  );
}
