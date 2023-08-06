import React, { useState, useEffect } from "react";
import ApiHurricane from "./ApiHurricane";
import ApiSmithRock from "./ApiSmithRock";
import "./ClimbsDropdown.css";

const ClimbsDropdown = () => {
  const [climb, setClimb] = useState("Ready");

  const [hurricaneContentVisible, setHurricaneContentVisible] = useState(false);
  const [smithRockContentVisible, setSmithRockContentVisible] = useState(false);

  useEffect(() => {
    climb === "hurricane"
      ? setHurricaneContentVisible(true)
      : setHurricaneContentVisible(false);
    climb === "smithrock"
      ? setSmithRockContentVisible(true)
      : setSmithRockContentVisible(false);
  }, [climb]);

  const handleOnChange = (e) => {
    setClimb(e.target.value);
  };

  // const makeFirstLetterCapital = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  // const renderResult = () => {
  //   let result;
  //   climb === "Ready?"
  //     ? (result = "choose your climb")
  //     : (result = makeFirstLetterCapital(climb));
  //   return result;
  // };

  return (
    <div className="container mt-3">
      <div>
        <h1 className="h1-climbs">climbs ahead!</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={climb} onChange={handleOnChange}>
          <option value="Ready">Ready?</option>
          <option value="hurricane">Hurricane</option>
          <option value="smithrock">Smith Rock</option>
        </select>
      </div>
      {hurricaneContentVisible && <ApiHurricane />}
      {smithRockContentVisible && <ApiSmithRock />}
    </div>
  );
};

export default ClimbsDropdown;
