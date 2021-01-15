import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Grid from '@material-ui/core/Grid'
import Appbar from './components/Appbar'
import AddProduct from './containers/AddProduct'
import SearchProducts from './containers/SearchProducts'
import EditProduct from './containers/EditProduct'
import DeleteProduct from './containers/DeleteProduct'

const App = () => {
  return (
    <Grid container>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12}>
            <Appbar />
          </Grid>
        </Grid>
        <Grid container>
          <Switch>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/edit-product">
              <EditProduct />
            </Route>
            <Route path="/delete-product">
              <DeleteProduct />
            </Route>
            <Route path="/">
              <SearchProducts />
            </Route>
          </Switch>
        </Grid>
      </BrowserRouter>
    </Grid>
  )
}

export default App
