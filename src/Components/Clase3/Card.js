import React from 'react'
import Pokemons from './Pokemons'
import Datos from './pokemonesDatos'

const Card = () => {
  return (
    <div>
      {
        Datos.map((pokemon,i)=>
        <Pokemons
            key={i}
            url={pokemon.url}
            name={pokemon.name}
            type={pokemon.type}
        />
        )
      }
    </div>
      
  )
}

export default Card
