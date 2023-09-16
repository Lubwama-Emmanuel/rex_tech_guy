import Button from "../ui/Button";

export default function Banner() {
  const clipPathValues = {
    sec1: "0 0, 100% 0, 100% 50%, 100% 100%, 25% 100%, 0% 50%",
    sec2: "25% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%",
  };

  return (
    <section className="relative h-[1300px] bg-gradient-to-b from-emerald-400 to-emerald-900">
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec1})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      ></div>
      <div className="absolute left-[10%] right-0 top-[5%] grid grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-7xl font-semibold uppercase ">
            the best gaming is the gaming you can see
          </h2>
          <h3 className="text-2xl">
            You donot choose a gaming laptop, its chooses you
          </h3>
          <Button>explore</Button>
        </div>
        <div>
          <img src="/images/gaming.png" className="w-[100%]" />
        </div>
      </div>
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec2})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      ></div>
      <div className="absolute bottom-0 grid grid-cols-2">
        <div>
          <img src="/images/accessories.png" className="w-[100%]" />
        </div>
        <div className="space-y-5 px-14">
          <h2 className="left-0 text-7xl font-semibold uppercase">
            And just with the right accessories
          </h2>
          <h3 className="text-2xl">
            From vibrant mouse clicks to crystal-clear soundscapes, these
            companions make every click an adventure. Elevate your laptop,
            express yourself, and enhance your experience with the magic of
            accessories.
          </h3>
          <Button>explore</Button>
        </div>
      </div>
    </section>
  );
}
