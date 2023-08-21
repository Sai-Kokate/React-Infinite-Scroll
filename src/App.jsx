import { useEffect, useState } from "react";
import Pokemons from "./pages/Pokemons";
import axios from "axios";

function App() {
  const [pageNo, setPageNo] = useState(1);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoadiing] = useState(true);
  const fetchData = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageNo * 20 - 20}`
    );
    console.log(res.data.results);
    // setPokeData(res.data.results);
    setPokeData((prev) => [...prev, ...res.data.results]);
    setLoadiing(false);
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const onScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const scroll = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (windowHeight + scroll + 1 > totalHeight) {
      setLoadiing(true);
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <h1>Pokemon Data</h1>
      {<Pokemons pokeData={pokeData} />}
      {loading && <div className="loading">Loading..</div>}
    </>
  );
}

export default App;
