import { useState, useEffect } from "react";
import Paging from "./Paging";
import PokemonList from "./PokemonList";
import axios from "axios";
import { div } from "prelude-ls";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] =useState(true)

    useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel =c)
      })
      .then(response => {
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
        setPokemon(response.data.results.map(poke => poke.name))
        setLoading(false)
  })
    return () => cancel()
}, [currentPageUrl])

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }
  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <div className="App">
      {loading && <div className="loading">Loading...</div>}
      { !loading && <PokemonList pokemon={pokemon} />}
      <Paging
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default App;
