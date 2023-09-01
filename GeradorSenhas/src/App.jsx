import { useState } from 'react'
import Button from './Components/Button'

function App() {
  const [senha, setSenha] = useState("")
  const [copiar, setCopiar] = useState("copiar")

  function GerarSenha(){
    setSenha(Math.random().toString(36).slice(-8))
    setCopiar("copiar")
  }

  function CopiarSenha(){
    window.navigator.clipboard.writeText(senha)
    setCopiar("copiado")
  }

  return (
    <>
      <h1>Gerador de senhas</h1>
      <Button
      name="gerar senha" 
      func={GerarSenha}
      />
      <Button 
      name={copiar}
      func={CopiarSenha}
      />
      <div className='mostarSenha'>{senha}</div>
    </>
  )
}

export default App
