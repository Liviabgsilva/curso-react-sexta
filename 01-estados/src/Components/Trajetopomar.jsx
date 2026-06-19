import { useState } from "react";

function Trajetopomar() {
  const [vendas, setvendas] = useState(0);
  function calcularequipe() {
    let iniciallaranja = Number(prompt("laranjas iniciais:"));
    let finallaranja = Number(prompt("Quantas laranjas final:"));
    let totallaranja = iniciallaranja - finallaranja ;

    setvendas(totallaranja);
  }

  return (
    <div className="cont-Trajetopomar">
      {}
      <h2>Calculo de quantas laranjas foram vendidas</h2>
      <button onClick={calcularequipe}>Somar laranjas</button>
      <p>Total de laranjas vendidas {vendas}</p>
    </div>
  );
}

export default Trajetopomar;