import React, { useRef } from "react";
import "./ApiCards.css";
import { useHurricane } from "../hooks/useHurricane";
import { useCopyToClipboard } from "../hooks/useCopy";

const HurricaneList = () => {
  // const [selected, setSelected] = useState();
  const inputRef = useRef();

  function handleClick() {
    console.log(inputRef.current.value);
  }
  const { error, loading, data } = useHurricane();

  if (loading) return <p>please wait while the awesomeness loads</p>;
  if (error) return `Error ${error.message}`;

  // const text = {climbs.metadata.lat}

  return (
    // original code
    <div className="ClimbsList">
      {data.areas.map((climbs) => {
        return (
          <>
            <div className="climbCard">
              <ul>
                <li className="title"> {climbs.areaName}</li>
                <li> Tries: {climbs.totalClimbs}</li>
                <li> Coordinates: </li>
                <li>
                  <button
                    onClick={() => {
                      handleClick;
                    }}
                  >
                    <code>
                      {climbs.metadata.lat} , {climbs.metadata.lng}
                    </code>
                  </button>
                </li>
                <li>{climbs.content.description}</li>
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HurricaneList;
