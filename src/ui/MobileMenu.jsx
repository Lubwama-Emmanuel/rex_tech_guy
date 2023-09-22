/* eslint-disable react/prop-types */
import Links from "./Links";
import Logo from "./Logo";

export default function MobileMenu({ setShowMenu }) {
  return (
    <section className="absolute h-[100dvh] w-[100%] bg-slate-200/20 backdrop-blur-sm sm:hidden ">
      <div className="flex h-[100%] justify-between">
        <div className="h-[100%] w-[60%]  bg-gradient-to-b from-emerald-400 to-emerald-700">
          <div className="w-[100%] border border-emerald-400 bg-white py-4 text-center">
            <Logo />
          </div>
          <Links
            styles={"flex flex-col text-xl uppercase space-y-1 px-2 py-4"}
          />
        </div>
        <div
          className="mr-2 mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-2xl"
          onClick={() => setShowMenu((value) => !value)}
        >
          <h2 className="text-center">X</h2>
        </div>
      </div>
    </section>
  );
}
