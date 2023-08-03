import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./Map.css";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";

const center = { lat: 48.8584, lng: 2.2945 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBBxKEMeIVp6Y0S-xTnlpk68aIL2ksDSs0",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongtitude(position.coords.longitude);
      console.log(latitude, longtitude);
    });
  }, [latitude, longtitude]);

  let currentLocation = `lat=${latitude}&lon=${longtitude}`;
  console.log(currentLocation);

  if (!isLoaded) {
    if (!isLoaded)
      return (
        <div>
          <p>please wait while the awesomeness loads</p>
        </div>
      );
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse("");
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <>
      <div className="map-container">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={currentLocation} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>

      <div className="direction-box">
        <div className="input-text">
          <Autocomplete>
            <input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>

          <Autocomplete>
            <input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
        </div>
        <div className="direction-box-lower">
          <div className="button-group">
            <button className="button" type="submit" onClick={calculateRoute}>
              Calculate Route
            </button>
            <button className="button" type="submit" onClick={clearRoute}>
              Clear Route
            </button>
            <FontAwesomeIcon
              icon={faLocationArrow}
              size="xl"
              onClick={() => {
                map.panTo({ lat: latitude, lng: longtitude });
                map.setZoom(15);
              }}
            />
          </div>

          <div className="results-group">
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;

// const Maps = () => {
//   return (
//     <>
//       <h1> Mapss is working</h1>
//     </>
//   );
// };

// export default Maps;
