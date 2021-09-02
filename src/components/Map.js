import "../css/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = () => {
  return (
    <div id="bottom-half-map">
      <MapContainer
        center={[30.3244, 78.03392]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[30.3244, 78.03392]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
