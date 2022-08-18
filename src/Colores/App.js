import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {

    /* ESPACIO DE TRABAJO
- Armar la estructura para una Class Component
- Hacer un state con el arreglo de los colores
- Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */
    constructor(){
        super()
        this.state = {
            colors : ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
        }
    }

shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
    }

shuffle = (props) =>{
    this.setState({colors: this.state.colors = this.state.colors.sort((a, b) => 0.5 - Math.random())})
}


render() {
    return (
        <div className="container">
        <div className="panel">
            {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
        </div>

    )
}
}