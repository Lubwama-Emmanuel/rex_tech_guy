/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./Logo";

export default function MobileHeader({ setShowMenu }) {
  const [isSearch, setisSearch] = useState(false);

  function HandleToggleSearch() {
    setisSearch((value) => !value);
  }
  return (
    <header className="fixed left-0 right-0 top-0 space-y-3 bg-white px-2 py-3 sm:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div
            className="space-y-1"
            onClick={() => setShowMenu((value) => !value)}
          >
            <div className="h-1 w-8 bg-emerald-400"></div>
            <div className="h-1 w-8 bg-emerald-500"></div>
            <div className="h-1 w-8 bg-emerald-600"></div>
            <div className="h-1 w-8 bg-emerald-700"></div>
          </div>
          <Logo />
        </div>
        <div className="flex space-x-2">
          {!isSearch && (
            <button onClick={() => HandleToggleSearch()}>
              <svg className="h-7 w-7 fill-emerald-800">
                <use xlinkHref="sprite.svg#icon-search"></use>
              </svg>
            </button>
          )}
          <button>
            <svg className="h-7 w-7 fill-emerald-800">
              <use xlinkHref="sprite.svg#icon-shopping-bag"></use>
            </svg>
          </button>
        </div>
      </div>
      {isSearch && (
        <div>
          <div className="flex items-center justify-between rounded-full border border-emerald-400 pr-3">
            <input
              type="text"
              placeholder="Search for your favourite"
              className=" w-56 rounded-full border-none px-3 py-1 transition-all duration-300 focus:w-64 focus:outline-none"
            />
            <button>
              <svg className="h-7 w-7 fill-emerald-800">
                <use xlinkHref="sprite.svg#icon-search"></use>
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
