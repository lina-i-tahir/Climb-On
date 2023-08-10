import React from "react";
import "./ApiCards.css";
import { useSmithRock } from "../hooks/useSmithRock";

const SmithRockList = () => {
  const { error, loading, data } = useSmithRock();

  if (loading) return <p>please wait while the awesomeness loads</p>;
  if (error) return `Error ${error.message}`;

  return (
    // original code
    <div className="ClimbsList">
      {data.areas.map((climbs) => {
        return (
          <div className="climbCard">
            <ul>
              <li className="title"> {climbs.areaName} </li>
              <li> Tries: {climbs.totalClimbs}</li>
              <li> Coordinates: </li>
              <li>
                <code>
                  {climbs.metadata.lat} , {climbs.metadata.lng}
                </code>
              </li>
              <li>{climbs.content.description}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SmithRockList;
