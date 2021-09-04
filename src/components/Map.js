import "../css/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { iconPerson } from "./Icon";

export const Map = ({ lat, lng }) => {
  const latitude = lat ? lat : 30.3244;
  const longitude = lng ? lng : 78.03392;
  return (
    <div id="bottom-half-map">
      <MapContainer
        center={[latitude, longitude]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={iconPerson} position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
