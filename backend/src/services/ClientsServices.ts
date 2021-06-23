import { getCustomRepository } from 'typeorm'
import { ClientsRepository } from '../repositories/ClientsRepository'

interface IClientsCreate {
  cliente: string;
  telefone: string;
  email: string
}

interface IClientsShow {
  id: string
}

interface IClientsUpdate {
  id: string
  cliente: string;
  telefone: string;
  email: string
}

class ClientsServices {

  async create({ cliente, telefone, email }: IClientsCreate) {

    const clientsRepository = getCustomRepository(ClientsRepository)

    const emailAlreadyExists = await clientsRepository.findOne({
      email
    })

    if (emailAlreadyExists) {
      throw new Error('Email já cadastrado!')
    }

    const clients = clientsRepository.create({
      cliente,
      telefone,
      email
    })

    await clientsRepository.save(clients)

    return clients
  }

  async index() {
    const clientsRepository = getCustomRepository(ClientsRepository)

    const clients = await clientsRepository.find()

    return clients;
  }

  //async show({ id: string }) {
  async show({ id }: IClientsShow) {
    const clientsRepository = getCustomRepository(ClientsRepository)

    const clients = await clientsRepository.findOne({ id })

    console.log(clients)

    if (!clients) {
      throw new Error('Cliente não encontrado!')
    }

    return clients;
  }

  async delete({ id }: IClientsShow) {
    const clientsRepository = getCustomRepository(ClientsRepository)

    const clients = await clientsRepository.findOne({ id })

    if (!clients) {
      throw new Error('Cliente não encontrado!')
    }

    return await clientsRepository.delete({ id })
  }

  async update({ id, cliente, telefone, email }: IClientsUpdate) {
    const clientsRepository = getCustomRepository(ClientsRepository)

    let clients = await clientsRepository.findOne({ id })

    if (!clients) {
      throw new Error('Cliente não encontrado!')
    }

    await clientsRepository.update(
      id, {
      cliente,
      telefone,
      email
    })

    clients = await clientsRepository.findOne({ id })

    return clients

  }
}

export { ClientsServices }