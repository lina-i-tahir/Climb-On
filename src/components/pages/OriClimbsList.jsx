// import React, { useState } from "react";
// import "./ClimbsList.css";
// import { useClimb } from "../hooks/useClimbs";
// import ClimbSummary from "./ClimbSummary";
// import { Scrollbar } from "react-scrollbars-custom";

// const ClimbsList = () => {
// const [selected, setSelected] = useState();

// const { error, loading, data } = useClimbs();

// if (loading) return <p>please wait while the awesomeness loads</p>;
// if (error) return `Error ${error.message}`;

// return (
// original code
//     <div className="ClimbsList">
//       {data.areas.map((climbs) => {
//         return (
//           <div className="climbCard">
//             <ul>
//               <li>
//                 <div className="title"> Area Name: {climbs.areaName} </div>
//               </li>

//               <li> Tries: {climbs.totalClimbs}</li>
//               <li> Coordinates: </li>
//               <li>
//                 {climbs.metadata.lat} , {climbs.metadata.lng}
//               </li>
//               <li>{climbs.content.description}</li>
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ClimbsList;

//////
// original
//           <div className="climbCard">
//             <ul>
//               <li>
//                 <div className="title"> Area Name: {climbs.areaName} </div>
//               </li>

//               <li> Tries: {climbs.totalClimbs}</li>
//               <li> Coordinates: </li>
//               <li>
//                 {climbs.metadata.lat} , {climbs.metadata.lng}
//               </li>
//               <li>{climbs.content.description}</li>
//             </ul>
//           </div>

/////////
// option

// <>
//   <div className="ClimbsList">
//     <select
//       onChange={(e) => {
//         const findValue = data.areas?.find((x) => x.id === e.target.value);
//         console.log(findValue);
//         setSelected(findValue);
//       }}
//       defaultValue="default"
//     >
//       <option value="default">Choose an option</option>

//       {data.areas
//         ? data.areas.map((climbs) => {
//             return (
//               <option key={climbs.id} value={climbs.id}>
//                 {climbs.areaName}
//               </option>
//             );
//           })
//         : null}
//     </select>
//   </div>
//   {selected ? <ClimbSummary props={selected} /> : null}
// </>

//  {selectedValue
// ? data.areas.map((climbs) => {
//     return (
//       // adding value === id
//       <option key={climbs.id} value={climbs.id}>
//         {climbs.areaName}
//       </option>
//       );
//     })
//   : null}

// {selectedValue ? <CryptoSummary crypto={selectedValue} /> : null}
