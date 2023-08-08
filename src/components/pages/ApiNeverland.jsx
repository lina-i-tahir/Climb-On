import "./ApiCards.css";
import { useNeverland } from "../hooks/useNeverland";

const NeverlandList = () => {
  const { error, loading, data } = useNeverland();

  if (loading) return <p>please wait while the awesomeness loads</p>;
  if (error) return `Error ${error.message}`;

  return (
    // original code
    <div className="ClimbsList">
      {data.areas.map((climbs, index) => {
        return (
          <>
            <div className="climbCard">
              <ul>
                <li className="title"> {climbs.areaName}</li>
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
          </>
        );
      })}
    </div>
  );
};

export default NeverlandList;
