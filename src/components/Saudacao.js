function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, tranquilão?`
  }
  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao
