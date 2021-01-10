import React, { useState } from 'react'
import axios from 'axios'
import Appbar from './components/Appbar'
import Searchbar from './components/Searchbar'
import ProductCard from './components/ProductCard'
import Grid from '@material-ui/core/Grid'

const App = () => {
  const [searchText, setSearchText] = useState("")
  const [productsData, setProductsData] = useState([])

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleSearchItem = async () => {
    let responseData = []
    if (searchText !== "") {
      await axios.get(`http://localhost:8000/api/products/${searchText}`)
        .then(response => {
          responseData = []
          responseData.push(response.data.data)
        })
    } else {
      await axios.get('http://localhost:8000/api/products/')
        .then(response => {
          responseData = response.data.data
        })
    }
    setProductsData(responseData)
  }

  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12}>
          <Appbar />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Searchbar
            handleTextChange={handleSearchTextChange}
            searchItem={handleSearchItem}
          />
        </Grid>
        <Grid item xs={6}>
          {productsData.length > 0
            ? (productsData.map(element => (
              <ProductCard
                key={element.id}
                productBrand={element.brand}
                productImage={element.image}
                productName={element.name}
                productDescription={element.description}
                productPrice={element.price}
              />
            )))
            : null
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
