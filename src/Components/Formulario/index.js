import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'UI e Design',
    'Mobile',
    'Inovação e gestão'
  ]

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Formulário enviado!')
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha aqui os dados do colaborador</h2>
        <CampoTexto
          required="true"
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          required="true"
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          required="true"
          label="Imagem"
          placeholder="Insira a imagem"
        />
        <ListaSuspensa required="true" label="times" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
