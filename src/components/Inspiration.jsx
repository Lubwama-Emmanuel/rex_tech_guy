export default function Inspiration() {
  const clipPathValues = {
    base: "0 0, 100% 0%, 100% 100%, 32% 100%",
  };
  return (
    <section className="h-96 bg-emerald-800">
      <div
        style={{
          clipPath: `polygon(${clipPathValues.base})`,
        }}
        className="h-[100%] w-[100%] bg-white "
      ></div>
    </section>
  );
}
