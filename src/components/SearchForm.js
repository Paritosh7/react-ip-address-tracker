import arrow from "../images/icon-arrow.svg";
import "../css/SearchForm.css";
export const SearchForm = () => {
  return (
    <form id="search-main">
      <input type="text" placeholder="Search for an IP address or domain" />
      <button>
        <img src={arrow} alt="search ip address" />
      </button>
    </form>
  );
};
