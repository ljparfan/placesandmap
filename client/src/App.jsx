import { useState, useEffect } from "react";
import Map from "./components/Map";
import MapWrapper from "./components/MapWrapper";
import SearchBar from "./components/SearchBar";
import { getApiKey } from "./services/key";
import "./App.css";
import { useSelector } from "react-redux";
import { selectSelectedPlace } from "./store/place/placeSelectors";

const App = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const [apiKey, setApiKey] = useState(null);
  const selectedPlace = useSelector(selectSelectedPlace);

  useEffect(() => {
    getApiKey().then((response) => {
      setApiKey(response.data.apiKey);
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  if (!apiKey) {
    return null;
  }

  return (
    <>
      <SearchBar />
      <MapWrapper apiKey={apiKey}>
        <Map coordinates={selectedPlace?.geometry?.location || coordinates} />
      </MapWrapper>
    </>
  );
};

export default App;
