import React, { useState, useEffect } from "react";
import ApiHurricane from "./ApiHurricane";
import ApiSmithRock from "./ApiSmithRock";
import ApiBritishColumbia from "./ApiBritishColumbia";
import ApiNeverland from "./ApiNeverland";
import "./ClimbsDropdown.css";

const ClimbsDropdown = () => {
  const [climb, setClimb] = useState("Ready");

  const [hurricaneContentVisible, setHurricaneContentVisible] = useState(false);
  const [smithrockContentVisible, setSmithrockContentVisible] = useState(false);
  const [britishcolumbiaContentVisible, setBritishcolumbiaContentVisible] =
    useState(false);
  const [neverlandContentVisible, setNeverlandContentVisible] = useState(false);

  useEffect(() => {
    climb === "hurricane"
      ? setHurricaneContentVisible(true)
      : setHurricaneContentVisible(false);
    climb === "smithrock"
      ? setSmithrockContentVisible(true)
      : setSmithrockContentVisible(false);
    climb === "britishcolumbia"
      ? setBritishcolumbiaContentVisible(true)
      : setBritishcolumbiaContentVisible(false);
    climb === "neverland"
      ? setNeverlandContentVisible(true)
      : setNeverlandContentVisible(false);
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
    <div className="h1-climbs-con">
      <div>
        <h1 className="h1-climbs">Climbs ahead!</h1>

        <p>copy & paste the route to the map to be on your way!</p>
      </div>
      <div className="dropdown">
        <select className="form-select" value={climb} onChange={handleOnChange}>
          <option value="Ready">Ready?</option>
          <option value="hurricane">Hurricane</option>
          <option value="smithrock">Smith Rock</option>
          <option value="britishcolumbia">British Columbia</option>
          <option value="neverland">Neverland</option>
        </select>
      </div>
      <br></br>
      <p></p>
      <p></p>
      {hurricaneContentVisible && <ApiHurricane />}
      {smithrockContentVisible && <ApiSmithRock />}
      {britishcolumbiaContentVisible && <ApiBritishColumbia />}
      {neverlandContentVisible && <ApiNeverland />}
    </div>
  );
};

export default ClimbsDropdown;
