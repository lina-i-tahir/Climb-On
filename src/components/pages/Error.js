import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <h1> 404</h1>
      <p>Page not found</p>
      <Link to="/">Head home</Link>
    </div>
  );
};

export default Error;
