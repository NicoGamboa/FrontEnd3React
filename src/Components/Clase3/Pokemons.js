import React from 'react'

function Pokemons(props) {

let cardClassName=""
  if(props.type==="fire"){
    cardClassName="is-fire"
  }else if(props.type==="water"){
    cardClassName="is-water"
  }
    return (
      <React.Fragment>
        <section className={cardClassName}>
        <img src={props.url} alt={props.name}/>
        <p>{props.name}</p>
        </section>
      </React.Fragment>
    )
}



export default Pokemons