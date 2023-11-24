export default function Brands() {
  return (
    <section className=" m-10 text-center">
      <h3 className="mb-5 text-2xl">Supported brands</h3>
      <div className=" flex items-center justify-center space-x-10">
        <img
          src="/images/lenovo.svg"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
        <img
          src="/images/hp.png"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
        <img
          src="/images/acer.png"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
        <img
          src="/images/dell.png"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
      </div>
    </section>
  );
}
