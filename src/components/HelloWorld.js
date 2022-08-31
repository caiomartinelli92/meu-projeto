import Frase from './Frase'

function HelloWorld() {
  return (
    <div>
      <Frase />
      <h1>Meu primeiro componente</h1>
      <b>
        <Frase />
      </b>
    </div>
  )
}

export default HelloWorld
