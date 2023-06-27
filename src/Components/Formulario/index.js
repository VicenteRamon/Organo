import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

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

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha aqui os dados do colaborador</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          required={true}
          label="Imagem"
          placeholder="Insira a imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          required={true} 
          label="times" 
          itens={times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
