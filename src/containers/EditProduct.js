import React, { useState } from 'react'
import axios from 'axios'
import qs from 'querystring'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { fade, makeStyles } from '@material-ui/core/styles'
import Instructions from '../components/Instructions'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
  button: {
    paddingBottom: theme.spacing(0.8),
    backgroundColor: fade(theme.palette.primary.main, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.65)
    },
  }
}))

const EditProduct = () => {
  const [responseMessage, setResponseMessage] = useState("")
  const [responseError, setResponseError] = useState(false)
  const [responseErrorText, setResponseErrorText] = useState("")
  const [productName, setProductName] = useState("")
  const [productBrand, setProductBrand] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productIdError, setProductIdError] = useState(false)
  const [productPriceError, setProductPriceError] = useState(false)
  const [productId, setProductId] = useState("")
  const classes = useStyles()

  const handleAddItem = async () => {
    if (productId !== "" && !isNaN(productPrice)) {
      try {
        const url = `http://localhost:8000/api/products/${productId}`
        const data = {
          name: productName,
          brand: productBrand,
          image: productImage,
          description: productDescription,
          price: productPrice
        }
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        const response = await axios.patch(url, qs.stringify(data), config)
        setResponseMessage(response.data.message)
        setResponseError(false)
      } catch (error) {
        setResponseErrorText("Request failed")
        setResponseError(true)
        console.log(error)
      }
    } else {
      if (productId === "") {
        setProductIdError(true)
      }

      if (isNaN(productPrice)) {
        setProductPriceError(true)
      }
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <TextField
              label="Id"
              helperText="ID del producto"
              variant="outlined"
              fullWidth
              required
              onChange={(event) => setProductId(event.target.value)}
              error={productIdError}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              helperText="Nombre del producto"
              variant="outlined"
              fullWidth
              onChange={(event) => setProductName(event.target.value)}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Marca"
              helperText="Marca del producto"
              variant="outlined"
              fullWidth
              onChange={(event) => setProductBrand(event.target.value)}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Imagen"
              helperText="URL de imagen para el producto"
              variant="outlined"
              fullWidth
              onChange={(event) => setProductImage(event.target.value)}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripción"
              helperText="Descripción del producto"
              variant="outlined"
              fullWidth
              onChange={(event) => setProductDescription(event.target.value)}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Precio"
              helperText="Precio del producto"
              variant="outlined"
              fullWidth
              onChange={(event) => setProductPrice(event.target.value)}
              error={productPriceError}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <br />
            <Button
              className={classes.button}
              variant="contained"
              size="small"
              onClick={handleAddItem}
            >
              <Typography variant="subtitle2">
                Añadir Producto
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <br />
            <Instructions type="add" />
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
          : (
            <Typography variant='subtitle1'>
              {responseMessage}
            </Typography>
          )
        }
      </Grid>
      <Grid item xs={2} />
    </Grid>
  )
}

export default EditProduct