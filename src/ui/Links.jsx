import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <ul className="flex justify-between space-x-12 text-xl uppercase">
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
  );
}
