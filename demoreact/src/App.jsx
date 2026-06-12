
import './App.css'
import Texto from './componentes/Texto'
import Titulo from './componentes/Titulo'

function App() {


  return (
   <div className='cont-app'>
    <Titulo/>
    <Texto/>
<img className='imagens-gerais' src="./licensed-image.jpg" alt="" />
<h2>coisas que eu gosot em você:</h2>
<ul>
<li>Você é legal</li>
<li>Divertido/(a)</li>
<li>Inteligente</li>
<li>amoroso/(a)</li>
<li>fiel</li>

</ul>
   </div>
  )
}

export default App
