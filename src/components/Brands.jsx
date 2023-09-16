export default function Brands() {
  const clipPathValues = {
    sec1: "0 0, 100% 0%, 100% 100%, 32% 100%",
    sec2: "32% 0, 100% 0%, 100% 100%, 0 100%",
  };

  return (
    <section className="h-[800px] bg-gradient-to-b from-emerald-400 to-emerald-900">
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec1})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      ></div>
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec2})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      ></div>
    </section>
  );
}
