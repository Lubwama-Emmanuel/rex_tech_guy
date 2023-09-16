/* eslint-disable react/prop-types */
export default function Button({ children }) {
  return (
    <button className="rounded-full border border-emerald-400 px-4 pb-1 pt-2 text-xl font-bold uppercase leading-none text-emerald-800">
      {children}
    </button>
  );
}
