import React from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left = {<div style={{ backgroundColor: 'red'}}>
          produtos disponiveis
        </div>}
        middle = {<div style={{ backgroundColor: 'blue'}}>
          sua lista de compras
        </div>}
        right={<div style={{ backgroundColor: 'green'}}>
          estatisticas
        </div>}
      />
    </Container>
  </Wrapper>
}

export default App
