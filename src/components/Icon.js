import L from "leaflet";
import mapPop from "../images/icon-location.svg";

const iconPerson = new L.Icon({
  iconUrl: mapPop,
  iconRetinaUrl: mapPop,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: new L.Point(30, 40),
});

export { iconPerson };
