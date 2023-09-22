/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const linkItems = [
  {
    id: 0,
    item: "products",
    link: "/products",
    subMenu: [
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
    ],
  },
  {
    id: 0,
    item: "services",
    link: "/services",
    subMenu: [
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
      {
        id: 0,
        item: "gaming",
        link: "/gaming",
      },
    ],
  },
  {
    id: 0,
    item: "contact",
    link: "/contact",
  },
];

export default function Links({ styles }) {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleShowDropdown() {
    setShowDropdown((value) => !value);
  }

  function handleHideDropdown() {
    setShowDropdown((value) => !value);
  }

  return (
    <ul className={styles}>
      {linkItems.map((el) => (
        <Link
          key={el.id}
          el={el}
          showDropdown={showDropdown}
          handleShowDropdown={handleShowDropdown}
          handleHideDropdown={handleHideDropdown}
        />
      ))}
    </ul>
  );
}

function Link({ el, showDropdown, handleHideDropdown, handleShowDropdown }) {
  return (
    <li key={el.id}>
      {el.subMenu ? (
        <>
          <NavLink
            to={el.link}
            onMouseEnter={() => handleShowDropdown()}
            onMouseLeave={() => handleHideDropdown()}
            className="hover:text-emerald-500 focus:text-emerald-500"
          >
            {el.item}
          </NavLink>
          {showDropdown && <DropDown items={el.subMenu} />}
        </>
      ) : (
        <NavLink
          to={el.link}
          className="hover:text-emerald-500 focus:text-emerald-500"
        >
          {el.item}
        </NavLink>
      )}
    </li>
  );
}

function DropDown({ items }) {
  return (
    <ul className="absolute">
      {items.map((el) => (
        <li key={el.id}>
          <NavLink to={el.link} className="focus:text-emerald-500">
            {el.item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
