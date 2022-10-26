import { useState, useEffect } from "react";
import Map from "./components/Map";
import MapWrapper from "./components/MapWrapper";
import SearchBar from "./components/SearchBar";
import { getApiKey } from "./services/key";
import "./App.css";

const App = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    getApiKey().then((response) => {
      setApiKey(response.data.apiKey);
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLat(latitude);
        setLng(longitude);
      }
    );
  }, []);

  return (
    <>
      <MapWrapper apiKey={apiKey}>
        <Map coordinates={{ lat, lng }} />
      </MapWrapper>
      <SearchBar />
    </>
  );
};

export default App;
