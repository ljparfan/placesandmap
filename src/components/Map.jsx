import { useEffect, useRef } from "react";

const Map = ({ coordinates }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center: coordinates,
      zoom: 15,
    });
    new window.google.maps.Marker({
      position: coordinates,
      map: map,
    });
  });

  return <div ref={ref} id="map" style={{ height: "100%", width: "100%" }} />;
};

export default Map;
