import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <h2 className=" bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text font-logo text-3xl font-semibold text-transparent ">
      <NavLink to="/">shop with rex</NavLink>
    </h2>
  );
}
