import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex gap-4 justify-center mb-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
