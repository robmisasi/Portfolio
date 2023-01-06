import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="w-10/12 flex p-4">
      <NavLink to="/" className="p-2">
        Home
      </NavLink>
      <NavLink to="/work" className="p-2">
        Work
      </NavLink>
      <NavLink to="/about" className="p-2">
        About
      </NavLink>
      <button type="button" className="p-2">
        Contact
      </button>
    </nav>
  );
};

export default MainNav;
