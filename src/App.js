//Crie um component de class

//Crie um array de objetos no STATE com pelo menos 6 objetos

//Faça um map do seu state e exiba os dados na tela

import React from "react";
import banana from "./img/banana.png";
import abacaxi from "./img/abacaxi.png";
import laranjas from "./img/laranjas.jpg";
import mamão from "./img/mamão.png";
import morangos from "./img/morango.png";
import melão from "./img/melão.png";

import "./style.css";

export default class App extends React.Component {
  state = {
    saladaFrutas: [
      {
        id: 1,
        fruta: "Banana",
        img: banana
      },

      {
        id: 2,
        fruta: "Abacaxi",
        img: abacaxi
      },
      {
        id: 3,
        fruta: "Laranja",
        img: laranjas
      },
      {
        id: 4,
        fruta: "Mamão",
        img: mamão
      },
      {
        id: 5,
        fruta: "Morango",
        img: morangos
      },
      {
        id: 6,
        fruta: "Melão",
        img: melão
      }
    ]
  };

  render() {
    return (
      <nav>
        {this.state.saladaFrutas.map((item) => (
          <section key={item.id}>
            <ul>
              <li> {item.fruta}</li>
              <img src={item.img} alt="frutas" />
            </ul>
          </section>
        ))}
      </nav>
    );
  }
}
