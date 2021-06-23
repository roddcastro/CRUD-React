import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './header'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to='/new/novo'>
          <button type="button">Novo Cadastro</button>
        </Link>

        <Link to='/'>
          <button type="button">Listagem</button>
        </Link>
      </Content>
    </Container>

  )
}

export default Header
