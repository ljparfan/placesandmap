import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const MapWrapper = ({ children, apiKey }) => {
  const render = (status) => {
    console.log(status);
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      {children}
    </Wrapper>
  );
};

export default MapWrapper;
