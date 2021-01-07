import React, { useState } from 'react'
import axios from 'axios'
import Appbar from './components/Appbar'
import Searchbar from './components/Searchbar'
import Grid from '@material-ui/core/Grid'

const App = () => {
  const [searchText, setSearchText] = useState("")

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleSearchItem = () => {
    axios.get(`http://localhost:8000/api/products/${searchText}`)
      .then(response => console.log(response))
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
      </Grid>
    </Grid>
  )
}

export default App
