import Links from "./Links";

export default function MobileMenu() {
  return (
    <section className="absolute bottom-0 top-0 h-[100dvh] w-[100%] bg-slate-200/20 backdrop-blur-sm sm:hidden ">
      <div className="flex h-[100%] justify-between">
        <div className="mt-10 h-[100%] w-[60%] bg-gradient-to-b from-emerald-400 to-emerald-700">
          <Links
            styles={"flex flex-col  text-xl uppercase space-y-1 px-2 py-7"}
          />
        </div>
      </div>
    </section>
  );
}
