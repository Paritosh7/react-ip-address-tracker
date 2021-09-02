import "../css/IPAddressData.css";
export const IPAddressData = () => {
  return (
    <div id="address-data">
      <div className="data-spacing">
        <h2>IP ADDRESS</h2>
        <p>192.212.174.101</p>
      </div>
      <div className="data-spacing">
        <h2>LOCATION</h2>
        <p>Brooklyn, NY 110091</p>
      </div>
      <div className="data-spacing">
        <h2>TIMEZONE</h2>
        <p>UTC -05:00</p>
      </div>
      <div className="data-spacing">
        <h2>ISP</h2>
        <p>SpaceX Starlink</p>
      </div>
    </div>
  );
};
