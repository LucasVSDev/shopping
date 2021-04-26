import React, { useState, useEffect } from 'react'
import LineChart from '../../shared/LineChart/lineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import Checkbox from '../../shared/Checkbox/checkbox'
import { Wrapper, Container } from './App.styles'

function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [lettuce, setLettuce] = useState(true)


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

          <Checkbox
            value={lettuce}
            title="Alface"
            onClick={() => setLettuce(!lettuce)}
          />
        </div>}
        right={<div>
          estatisticas:

          <LineChart color={colors[0]} title="saudavel" percentage={80} />
          <LineChart color={colors[1]} title="não tâo saudavel" percentage={20} />
          <LineChart color={colors[2]} title="limpeza" percentage={35} />
          <LineChart color={colors[3]} title="outros" percentage={15} />
        </div>}
      />
    </Container>
  </Wrapper>
}

export default App
