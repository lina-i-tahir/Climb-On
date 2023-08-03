import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// shared component of nested components
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
