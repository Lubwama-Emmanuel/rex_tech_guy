import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-[20%] px-5 py-2">
      <div className="text-center">
        <h2 className=" text-3xl font-semibold ">shop with rex</h2>
        <p className=" text-sm italic">the tech guy</p>
      </div>
      <ul className="flex flex-grow justify-between text-xl">
        <li>
          <NavLink to="/products">products</NavLink>
        </li>
        <li>
          <NavLink to="/services">services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
      <div>
        <button className=" px-2 py-1 text-xl font-bold">shop</button>
      </div>
    </header>
  );
}
