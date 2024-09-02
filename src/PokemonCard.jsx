export const PokemonCard=({pokemonData})=>{
  let imgCard = pokemonData.sprites.other.dream_world.front_default
  let Names =pokemonData.name
 let pokeMonTypes = pokemonData.types.map((curType)=>curType.type.name).join(', ')
 let PokemonHeight= pokemonData.height
 let PokemonWeight= pokemonData.weight
 let Speed = pokemonData.stats[5].base_stat

  
    return(
        <>
          <div className="pokeMonCard">
              <figure>
                 <img src={imgCard} alt="" className='imgBok' />
                </figure> 
              <h1>{Names}</h1> 
             <button>{pokeMonTypes}</button>
              <div className="containerBox">
                <p className="pokemonInfo"><span>Height:</span>{PokemonHeight}</p>
                <p className="pokemonInfo"><span>Weight:</span>{PokemonWeight}</p>
                <p className="pokemonInfo"><span>Speed:</span>{Speed}</p>
              </div>
                
          </div>
        </>
    )
}