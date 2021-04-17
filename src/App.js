import "./App.scss";
import Search from "./components/Search";
import Article from "./components/Article";
import { useEffect, useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResults] = useState([]);
  const [productDetails, setProductDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductDetails(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {};

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  }, [searchValue, productDetails]);

  return (
    <div className="App">
      {productDetails ? (
        ""
      ) : (
        <Search
          className="search-comp"
          onClick={handleClick}
          onChange={handleChange}
          value={searchValue}
          onSubmit={handleSubmit}
        />
      )}

      {result.map((part) => (
        <Article
          key={part.id}
          title={part.title}
          price={part.price}
          condition={part.condition}
          img={part.thumbnail}
        />
      ))}
    </div>
  );
};

export default App;
