const PokemonList = ({pokemon}) => {
    return ( 
        <div className="pokemon-list">
            {pokemon.map(poke => (
                <div key={poke}>{poke}</div>
            ))}
        </div>
     );
}
 
export default PokemonList;