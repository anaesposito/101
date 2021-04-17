import "./NavBar.scss";
import Search from "./Search";
import logo from "./logo.png";
const NavBar = ({ onClick, onChange, searchValue, onSubmit }) => {
  return (
    <section className="nav-header">
      <img alt="logo mercado ada" className="logo" src={logo} />
      <Search
        className="nav-search"
        onClick={onClick}
        onChange={onChange}
        value={searchValue}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default NavBar;
