import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, Handerl }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={Handerl}
  />
);
export default SearchBox;
