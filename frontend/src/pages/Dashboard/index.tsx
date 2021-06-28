import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { Container } from './styles'

interface Listagem {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [clientes, setClientes] = useState<Listagem[]>([])
  useEffect(() => {
    api.get('/clients').then(response => setClientes(response.data))
  }, [])
  console.log(clientes)

  async function handleDelete(id: string){
    await api.delete(`/clients/${id}`)
    setClientes(clientes.filter(cli => cli.id !== id))
    alert('Cliente deletado com sucesso!')
  }

  return (
    <Container>
      <table>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Email</th>
        <th>Ações</th>
      </tr>
      {clientes.map((cli, indice) =>
        <tr key={indice}>
          <td>{cli.cliente}</td>
          <td>{cli.telefone} </td>
          <td>{cli.email} </td>
          <td><Link to={`/new/${cli.id}`}><button type="button">Alterar</button></Link> <button type="button" onClick={() => handleDelete(cli.id)}>Excluir</button></td>
        </tr>
      )}
      </table>
    </Container>
  )
}

export default Dashboard