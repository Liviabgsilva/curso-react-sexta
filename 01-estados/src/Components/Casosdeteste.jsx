import { useState } from "react";

function Casosdeteste() {
  const [equipe, setEquipe] = useState(0);
  function calcularequipe() {
    let estagiario = Number(prompt("Quantos estagiarios:"));
    let pg = Number(prompt("Quantos pg:"));
    let clt = Number(prompt("Quantos clts:"));
    let totalEquipe = estagiario + pg + clt;

    setEquipe(totalEquipe);
  }

  return (
    <div className="cont-Casosdeteste">
      {}
      <h2>Calculo de Eqipe</h2>
      <button onClick={calcularequipe}>Somar membros da equipe</button>
      <p>Total de membros {equipe.toFixed(2)}</p>
    </div>
  );
}

export default Casosdeteste;