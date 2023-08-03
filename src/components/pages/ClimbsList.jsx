import React, { useState } from "react";
import "./ClimbsList.css";
import { useClimbs } from "../hooks/useClimbs";

const ClimbsList = () => {
  // const [selectedValue, setSelectedValue] = useState();

  const { error, loading, data } = useClimbs();

  if (loading) return <p>please wait while the awesomeness loads</p>;
  if (error) return `Error ${error.message}`;

  return (
    <>
      <div className="ClimbsList">
        <select
          onChange={(e) => {
            const findValue = data.areas?.find((x) => x.id === e.target.value);
            console.log(findValue);
            // setSelectedValue(findValue);
          }}
          defaultValue="default"
        >
          <option value="default">Choose an option</option>
          {/* {selectedValue
          ? data.areas.map((climbs) => {
              return (
                // adding value === id
                <option key={climbs.id} value={climbs.id}>
                  {climbs.areaName}
                </option>
                );
              })
            : null} */}

          {data.areas.map((climbs) => {
            return (
              // adding value === id
              <option key={climbs.id} value={climbs.id}>
                {climbs.areaName}
              </option>
            );
          })}
        </select>
      </div>

      {/* {selectedValue} */}
    </>
  );
};

export default ClimbsList;

// {selectedValue ? <CryptoSummary crypto={selectedValue} /> : null}

// original code
// <div className="ClimbsList">
//   {data.areas.map((climbs) => {
//     return (
//       <div>
//         <ul>
//           <li>
//             Area Name: {climbs.areaName} Tried: {climbs.totalClimbs}
//           </li>
//           <li>{climbs.content.description}</li>
//         </ul>
//       </div>
//     );
//   })}
// </div>
