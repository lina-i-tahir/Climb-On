// import ClimbsList from "./ClimbsList";
import Home from "./Home";
import ApiHurricane from "./ApiHurricane";
import ApiSmithRock from "./ApiSmithRock";
// import "./ClimbsMain.css";

const ClimbsMain = () => {
  return (
    <div class="anim_gradient">
      <div className="main">
        <Home />
        <ApiSmithRock />
        <ApiHurricane />
      </div>
    </div>
  );
};

export default ClimbsMain;
