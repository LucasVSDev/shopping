import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox/checkbox'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
  const [lettuce, setLettuce] = useState('')


  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={<div >
          produtos disponiveis:

          <Checkbox
            value={lettuce}
            title="Alface"
            onClick={() => setLettuce(!lettuce)}
          />
        </div>}
        middle={<div>
          sua lista de compras:
        </div>}
        right={<div>
          estatisticas:
        </div>}
      />
    </Container>
  </Wrapper>
}

export default App
