import React, { useState } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Searchbar from '../components/Searchbar'
import Instructions from '../components/Instructions'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
}))


const DeleteProduct = () => {
  const [searchText, setSearchText] = useState("")
  const [responseMessage, setResponseMessage] = useState("")
  const [responseError, setResponseError] = useState(false)
  const [responseErrorText, setResponseErrorText] = useState("")
  const classes = useStyles()

  const handleSearchItem = async () => {
    if (searchText !== "") {
      await axios.delete(`http://localhost:8000/api/products/${searchText}`)
        .then(response => {
          setResponseMessage(response.data.message)
          setResponseError(false)
        })
        .catch(error => {
          setResponseErrorText(error.response.data.error)
          setResponseError(true)
        })
    } else {
      setResponseErrorText("ID cannot be blank")
    }
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
              searchType="Eliminar"
            />
          </Grid>
          <Grid item xs={12}>
            <Instructions type="delete" />
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

export default DeleteProduct