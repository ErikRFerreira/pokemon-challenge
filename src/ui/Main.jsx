import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="my-10">
      <section className="px-2 max-w-3xl mx-auto">
        <Outlet />
      </section>
    </main>
  );
}
