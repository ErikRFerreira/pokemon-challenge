import Header from "./Header";
import Main from "./Main";

export default function AppLayout() {
  return (
    <div className="bg-slate-100 grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <Main />
    </div>
  );
}
