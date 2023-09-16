import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <ul className="flex justify-between space-x-12 text-xl uppercase">
      <li>
        <NavLink to="/products" className="focus:text-emerald-500">
          products
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="focus:text-emerald-500">
          services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="focus:text-emerald-500">
          contact
        </NavLink>
      </li>
    </ul>
  );
}
