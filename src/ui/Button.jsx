/* eslint-disable react/prop-types */
export default function Button({ children, handleClick }) {
  return (
    <button
      onClick={() => handleClick()}
      className="shawdow-emerald-500/50 rounded-full border border-emerald-400 px-4 pb-1 pt-2 font-bold uppercase leading-none text-emerald-800 shadow-lg sm:text-xl"
    >
      {children}
    </button>
  );
}
