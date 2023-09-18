import { NavLink } from "react-router-dom";

const linkItems = [
  {
    id: 0,
    item: "products",
    link: "/products",
  },
  {
    id: 0,
    item: "services",
    link: "/services",
  },
  {
    id: 0,
    item: "contact",
    link: "/contact",
  },
];

export default function Links() {
  return (
    <ul className="flex justify-between space-x-12 text-xl uppercase">
      {linkItems.map((el) => (
        <li key={el.id}>
          <NavLink to="/products" className="focus:text-emerald-500">
            products
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
