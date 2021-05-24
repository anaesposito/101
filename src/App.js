import "./App.scss";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import { useEffect, useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const [result, setResults] = useState([]);
  const [productDetails, setProductDetails] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [seeMore, setSeeMore] = useState("");
const [productId, setProductId] = useState("")


  const handleClickSeeMore = () => {
    setSeeMore(productId);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSearch(searchValue);
    setProductDetails(true);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    setUserSearch(searchValue);
  };

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        console.log(data.results);
      });
  }, [userSearch, productDetails]);

  return (
    <div className="App">
      {productDetails ? (
        <NavBar
          onClick={handleClick}
          onChange={handleChange}
          value={searchValue}
          onSubmit={handleSubmit}
        />
      ) : (
        ""
      )}

      {productDetails ? (
        ""
      ) : (
        <Search
          className="background-search"
          onClick={handleClick}
          onChange={handleChange}
          value={searchValue}
          onSubmit={handleSubmit}
        />
      )}
      <section className="search-results">
        {result.map((part) => (

          <Article
            key={part.id}
            title={part.title}
            price={part.price}
            condition={part.condition}
            img={part.thumbnail}
            regularPrice={part.original_price ? part.original_price : ""}
            seller={part.seller.eshop ? part.seller.eshop.nick_name : ""}
            shipping={part.shipping ? part.shipping.free_shipping : ""}
            onClick={handleClickSeeMore}
            className={seeMore}
            productId={part.id}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
