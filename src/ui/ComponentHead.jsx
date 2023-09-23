/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function ComponentHead({ title, link }) {
  return (
    <div className="flex justify-between text-2xl capitalize">
      <h3>{title}</h3>
      <h3>
        <NavLink to={link} className="flex items-center space-x-2">
          view all
          <svg className=" ml-2 h-4 w-4 fill-emerald-800">
            <use xlinkHref="sprite.svg#icon-chevron-thin-right"></use>
          </svg>
        </NavLink>
      </h3>
    </div>
  );
}
