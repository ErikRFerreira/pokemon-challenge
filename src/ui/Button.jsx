export default function Button({ children, disabled, onClick }) {
  let cssClass = "px-4 py-2 rounded-lg border-2 border-stone-200";
  cssClass += disabled ? " text-slate-300" : " bg-slate-300";
  return (
    <button disabled={disabled} onClick={onClick} className={cssClass}>
      {children}
    </button>
  );
}
