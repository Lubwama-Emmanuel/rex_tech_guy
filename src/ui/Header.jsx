import { useState } from "react";
import Button from "./Button";
import Links from "./Links";

export default function Header() {
  const [isSearch, setisSearch] = useState(true);

  function HandleToggleSearch() {
    setisSearch((value) => !value);
  }

  return (
    <header className="flex items-center justify-between  px-5 py-2">
      <div className="text-center">
        <h2 className=" font-logo bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-3xl font-semibold text-transparent ">
          shop with rex
        </h2>
      </div>
      {!isSearch && <Links />}
      <div className="flex w-auto items-center space-x-5">
        {isSearch ? (
          <div className="flex items-center justify-between rounded-full border border-emerald-400 ">
            <input
              type="text"
              placeholder="Search for your favourite"
              className="w-56 rounded-full border-none px-5 py-1 focus:outline-none"
            />
            <button>
              <svg className="h-7 w-7 fill-emerald-800">
                <use xlinkHref="sprite.svg#icon-search"></use>
              </svg>
            </button>
          </div>
        ) : (
          <button onClick={() => HandleToggleSearch()}>
            <svg className="h-7 w-7 fill-emerald-800">
              <use xlinkHref="sprite.svg#icon-search"></use>
            </svg>
          </button>
        )}
        <Button>shop</Button>
      </div>
    </header>
  );
}
