import { NavLink } from "react-router-dom";

// Company Logo component
export default function Logo() {
  return (
    <h2 className="bg-gradient-to-r from-emerald-500 to-emerald-800 bg-clip-text font-logo text-2xl font-semibold text-transparent sm:text-3xl ">
      <NavLink to="/" className="">
        shop with rex
      </NavLink>
    </h2>
  );
}
