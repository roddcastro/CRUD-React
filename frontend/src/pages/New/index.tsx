import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import api from '../../services/api'
import { Form } from './styles'

interface ClientesParametros{
  id: string;
}

interface Cadastro {
  cliente: string;
  telefone: string;
  email: string;
}
const New: React.FC = () => {
  const { params } = useRouteMatch<ClientesParametros>()
  const [clientes, setClientes] = useState<Cadastro[]>([])
  const [id, setId] = useState<Cadastro[]>([])
  const [cliente, setCliente] = useState<Cadastro[]>([])
  const [telefone, setTelefone] = useState<Cadastro[]>([])
  const [email, setEmail] = useState<Cadastro[]>([])

  useEffect(() => {
    async function loadData() {
      const dados = await api.get(`/clients/${params.id}`).then(response => response.data)
      if(dados) {
        setId(dados.id)
        setCliente(dados.cliente)
        setTelefone(dados.telefone)
        setEmail(dados.email)
      }else{
        setClientes([])
      }
    }loadData()
  }, [])

  async function handleAddClientes(event: any) {
    event.preventDefault()

    const { target: form } = event;

    const novoCadastro = {
      cliente: form.cliente.value,
      telefone: form.telefone.value,
      email: form.email.value,
    }

    console.log(novoCadastro)
    await api.post('/clients', novoCadastro)
    setClientes([...clientes, novoCadastro])
    form.reset()
  }
  return (
    <Form onSubmit={handleAddClientes}>
      <input type='text' name='cliente' placeholder='Cliente' />
      <input type='text' name='telefone' placeholder='Telefone' />
      <input type='text' name='email' placeholder='Email' />
      <button type='submit'>Enviar</button>
    </Form>
  )
}

export default New