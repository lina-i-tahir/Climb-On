import "./App.css";
import "./components/Button.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MapPage from "./components/pages/MapPage";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import SharedLayout from "./components/pages/SharedLayout";
import ClimbsMain from "./components/pages/ClimbsMain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mappage" element={<MapPage />} />
          <Route path="climbsmain" element={<ClimbsMain />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
