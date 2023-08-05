import React, { useState } from "react";
import "./ClimbsCards.css";
import { useHurricane } from "../hooks/useHurricane";
// import ClimbSummary from "./ClimbSummary";
// import { Scrollbar } from "react-scrollbars-custom";

const HurricaneList = () => {
  // const [selected, setSelected] = useState();

  const { error, loading, data } = useHurricane();

  if (loading) return <p>please wait while the awesomeness loads</p>;
  if (error) return `Error ${error.message}`;

  return (
    // original code
    <div className="ClimbsList">
      {data.areas.map((climbs) => {
        return (
          <div className="climbCard">
            <ul>
              <li className="title"> Area Name: {climbs.areaName}</li>

              <li> Tries: {climbs.totalClimbs}</li>
              <li> Coordinates: </li>
              <li>
                {climbs.metadata.lat} , {climbs.metadata.lng}
              </li>
              <li>{climbs.content.description}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HurricaneList;
