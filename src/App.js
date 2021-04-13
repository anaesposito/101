import "./App.scss";
import Search from "./components/Search";
import Article from "./components/Article";
import { useEffect, useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResults] = useState([]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // const handleChangeResults = () => {};

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, [searchValue]);
  // console.log("result", result);
  return (
    <div className="App">
      <Search
        className="search-comp"
        onChange={handleChange}
        value={searchValue}
      />

      {result.map((part) => {
        <Article
          key={part.id}
          title={part.title}
          price={part.price}
          condition={part.condition}
          img={part.thumbnail}
        />;
      })}
    </div>
  );
};
export default App;
