import "../css/IPAddressData.css";
export const IPAddressData = ({ data }) => {
  const ipAddress = data ? data.ip : `192.212.174.101`;
  const location = data
    ? `${data.location.city}, ${data.location.region}`
    : `Brooklyn, NY 110091`;
  const timezone = data ? `${data.location.timezone}` : "UTC -05:00";
  const isp = data ? `${data.isp}` : "SpaceX Starlink";

  return (
    <div id="address-data">
      <div className="data-spacing">
        <h2>IP ADDRESS</h2>
        <p>{ipAddress}</p>
      </div>
      <div className="data-spacing">
        <h2>LOCATION</h2>
        <p>{location}</p>
      </div>
      <div className="data-spacing">
        <h2>TIMEZONE</h2>
        <p>{timezone}</p>
      </div>
      <div className="data-spacing">
        <h2>ISP</h2>
        <p>{isp}</p>
      </div>
    </div>
  );
};
