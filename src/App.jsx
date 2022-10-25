import "./App.css";
import { useRef, useState, useEffect } from "react";
import Map from "./components/Map";
import MapWrapper from "./components/MapWrapper";

const App = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (ref && ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLat(latitude);
        setLng(longitude);
      }
    );

    setTimeout(() => {
      setLat(14.58778999662754);
      setLng(121.05043839251971);
    }, 5000);
  }, []);

  return (
    <MapWrapper>
      <Map coordinates={{ lat, lng }} />
    </MapWrapper>
  );
};

export default App;
