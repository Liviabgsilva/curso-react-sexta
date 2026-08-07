import {useState} from 'react'


function GeradorSenha() {
  const[senha, setSenha] = useState(8)
  return (
    
          <div className="section">
            <div className="senha-container">
           
              <button onClick={() => setSenha(senha * 90000000) } className="btn-gerar">
                clique para gerar sua senha
              </button>
              
              <div className="resultado-senha">
                <span>sua senha é:</span>
                <div className="box-senha">{senha}</div>
              </div>
            </div>
          </div>
        )

}

export default GeradorSenha