import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 uppercase font-medium">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
