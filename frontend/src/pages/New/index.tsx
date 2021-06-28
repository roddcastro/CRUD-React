import React, { useState } from 'react'
import InputMask from "react-input-mask";
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
  const [id, setId] = useState('')
  const [cliente, setCliente] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    async function loadData() {
      const dados = await api.get(`/clients/${params.id}`).then(response => response.data)
      console.log('dados', dados)
      if(dados) {
        setId(dados.id)
        setCliente(dados.cliente)
        setTelefone(dados.telefone)
        setEmail(dados.email)
      }else{
        setClientes([])
      }
    }
    loadData()
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
    if(id){
      await api.put(`/clients/${id}`, novoCadastro)
      alert('Dados alterados com sucesso!')
    }else{
      await api.post('/clients', novoCadastro)
      alert('Dados cadastrados com sucesso!')
    }

    setCliente('')
    setTelefone('')
    setEmail('')

    setClientes([...clientes, novoCadastro])
    form.reset()
  }
  return (
    <Form onSubmit={handleAddClientes}>
      <input type='text' name='cliente' value={cliente} onChange={e => setCliente(e.target.value)} placeholder='Cliente' />
      <InputMask type='text' name='telefone' mask="(99) 9999-9999" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder='Telefone' />
      <input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
      <button type='submit'>Enviar</button>
    </Form>
  )
}

export default New