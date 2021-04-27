import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart/lineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import ShoppingList from '../ShoppingList/ShoppingList'
import { Wrapper, Container } from './App.styles'
import productsMock from '../../mocks/products.json'

function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [products, setProducts] = useState(productsMock.products)
  const [selectedProducts, setSelectedProducts] = useState([])

  useEffect(() => {
    const newSelectedProducts = products.filter(product => product.checked)
    setSelectedProducts(newSelectedProducts)
  }, [products])

  function handleToggle(id, checked) {
    const newProducts = products.map(product =>
      product.id === id
        ? { ...product, checked: !product.checked }
        : product
    )
    setProducts(newProducts)
  }

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={<ShoppingList
          title="Produtos disponiveis"
          products={products}
          onToggle={handleToggle}
        />}
        middle={<ShoppingList
          title="Sua lista de compras"
          products={selectedProducts}
          onToggle={handleToggle}
        />}
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
