import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center bg-slate-300 px-4 py-3 border-b-2 border-stone-300 sm:px-6 ">
      <Nav />
    </header>
  );
}
