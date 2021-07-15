const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((poke) => (
        <div className="poke" key={poke}>
          {poke}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
