import React, { useState } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Searchbar from '../components/Searchbar'
import ProductCard from '../components/ProductCard'
import Instructions from '../components/Instructions'

const SearchProducts = ({ searchType }) => {
  const [searchText, setSearchText] = useState("")
  const [productsData, setProductsData] = useState([])
  const [responseError, setResponseError] = useState(false)
  const [responseErrorText, setResponseErrorText] = useState("")

  const handleSearchItem = async () => {
    let responseData = []
    if (searchText !== "") {
      if (isNaN(searchText) !== false) {
        await axios.get(`http://localhost:8000/api/products?search=${searchText}`)
          .then(response => {
            responseData = response.data.data
            setResponseError(false)
          })
          .catch(error => {
            setResponseErrorText(error.response.data.error)
            setResponseError(true)
          })
      } else {
        await axios.get(`http://localhost:8000/api/products/${searchText}`)
          .then(response => {
            responseData.push(response.data.data)
            setResponseError(false)
          })
          .catch(error => {
            setResponseErrorText(error.response.data.error)
            setResponseError(true)
          })
      }
    } else {
      await axios.get('http://localhost:8000/api/products/all')
        .then(response => {
          responseData = response.data.data
          setResponseError(false)
        })
        .catch(error => {
          setResponseErrorText(error.response.data.error)
          setResponseError(true)
        })
    }
    setProductsData(responseData)
  }

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <Searchbar
              handleTextChange={(event) => setSearchText(event.target.value)}
              searchItem={handleSearchItem}
              searchType="Buscar"
            />
          </Grid>
          <Grid item xs={12}>
            <Instructions type="search" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={3}>
        {responseError
          ? (
            <Typography color='error' variant='subtitle1'>
              {responseErrorText}
            </Typography>
          )
          : (productsData.map(element => (
            <ProductCard
              key={element.id}
              productId={element.id}
              productBrand={element.brand}
              productImage={element.image}
              productName={element.name}
              productDescription={element.description}
              productPrice={element.price}
            />
          )))
        }
      </Grid>
      <Grid item xs={2} />
    </Grid>
  )
}

export default SearchProducts