import "./SearchBar.css";
import { FaShoppingBasket } from "react-icons/fa";
function SearchBar() {
  return (
    <div className="container">
      <input className="searchBar" type="text" placeholder="Products" />
      <FaShoppingBasket className="icon" id="icon-gold" />
    </div>
  );
}
export default SearchBar;
