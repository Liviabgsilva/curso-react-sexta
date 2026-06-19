import { useState } from "react";

function PePequeno() {
  const [valeTroca, setValeTroca] = useState(0);
  function calcularTroca() {
    let precoPar = Number(prompt("Digite o preço de cada par de calçado (R$):"));
    let qtdTrocados = Number(prompt("Digite a quantidade de pares trocados:"));

    let totalVale = precoPar * qtdTrocados;

    setValeTroca(totalVale);
  }

  return (
    <div className="cont-pepequeno">
      {}
      <h2>Pé Pequeno - Cálculo de Vale Trocas</h2>
      <button onClick={calcularTroca}>Calcular Vale Troca</button>
      <p>Valor do Vale Trocas: R$ {valeTroca.toFixed(2)}</p>
    </div>
  );
}

export default PePequeno;