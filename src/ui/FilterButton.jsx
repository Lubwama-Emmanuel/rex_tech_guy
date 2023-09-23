/* eslint-disable react/prop-types */
export default function FilterButton({ children, isActive }) {
  const base =
    "shawdow-emerald-500/50 rounded-full border border-emerald-400 px-4 pb-1 pt-2 font-bold leading-none text-emerald-800 shadow-lg sm:text-xl";
  const active = base + " text-white bg-emerald-800";
  return <button className={isActive ? active : base}>{children}</button>;
}
