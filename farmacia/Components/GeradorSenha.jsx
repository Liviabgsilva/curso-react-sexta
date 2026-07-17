import React from 'react'

function GeradorSenha() {
  return (
    
          <div className="section">
            <div className="senha-container">
           
              <button className="btn-gerar">
                clique para gerar sua senha
              </button>
              
              <div className="resultado-senha">
                <span>sua senha é:</span>
                <div className="box-senha"></div>
              </div>
            </div>
          </div>
        )

}

export default GeradorSenha