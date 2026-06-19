
import './App.css'
import { useState } from 'react'
import Peba from './Components/Peba'
import Casosdeteste from './Components/Casosdeteste'
import PePequeno from './Components/Pepequeno'
import Trajetopomar from './Components/Trajetopomar'


function App() {
  const[rendimento, setRendimento] = useState(120000)
let salario = 10002

function incrementarSalario(){
  salario += 10

console.log("novo salário: R$" + salario)
//rndimento = 111111 <<<< nunca fazer isso
//setRendimento (200000)
setRendimento(rendimento + 25)
console.log(rendimento)
}

  return (
  <div className='cont-app'>
    <h1>Estados e outras coisas</h1>

    <Casosdeteste/>
     <PePequeno />
     <Trajetopomar />
     
  <Peba/>
 <hr />
salario:R${salario.toFixed(2).replace(".",",")}
<p>
  Rendimento: R$ {rendimento}
</p>
<button onClick={incrementarSalario}>💵</button>
  </div>
  )
}

export default App
