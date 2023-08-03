import "./Header.css";
import { Link } from "react-router-dom";
// import { Map } from "./components/Map";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-container">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              {/* <li>
              <Link to="/Map">{<Map />}</Link>
            </li> */}
            </ul>
          </div>
        </nav>
        <h1> where's your next climb?</h1>
        <h3>find your next adventure by scrolling the list</h3>
      </header>
    </>
  );
}
