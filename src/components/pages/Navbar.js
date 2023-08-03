import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <h1 className="navbar-container">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/clist">climbs</NavLink>
        <NavLink to="/mappage">map</NavLink>
      </h1>
    </>
  );
};

export default Navbar;
