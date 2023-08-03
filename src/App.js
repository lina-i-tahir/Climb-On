import "./App.css";
import "./components/Button.css";
import { Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MapPage from "./components/pages/MapPage";
import About from "./components/pages/About";

import SharedLayout from "./components/pages/SharedLayout";
import CList from "./components/pages/CList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mappage" element={<MapPage />} />
          <Route path="clist" element={<CList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
