import "../css/App.css";
import { IPAddressData } from "./IPAddressData";
import { Map } from "./Map";
import { SearchForm } from "./SearchForm";

function App() {
  return (
    <>
      <div id="top-half-main">
        <h1>IP Address Tracker</h1>
        <div id="main">
          <SearchForm />
          <IPAddressData />
        </div>
      </div>
      <Map />
    </>
  );
}

export default App;
