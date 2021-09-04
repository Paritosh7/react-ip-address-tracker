import React from "react";
import "../css/App.css";
import { client } from "../utils/client";
import { IPAddressData } from "./IPAddressData";
import { Map } from "./Map";
import { SearchForm } from "./SearchForm";

function App() {
  const [geoLocationData, setGeoLocationData] = React.useState(() => null);
  const lat = geoLocationData ? geoLocationData.location.lat : null;
  const lng = geoLocationData ? geoLocationData.location.lng : null;

  React.useEffect(() => {
    client(`api/v1?apiKey=`).then((responseData) => {
      setGeoLocationData(responseData);
    });
  }, []);
  return (
    <>
      <div id="top-half-main">
        <h1>IP Address Tracker</h1>
        <div id="main">
          <SearchForm />
          <IPAddressData data={geoLocationData} />
        </div>
      </div>
      <Map lat={lat} lng={lng} />
    </>
  );
}

export default App;
