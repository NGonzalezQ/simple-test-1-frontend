import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import FindReplaceIcon from '@material-ui/icons/FindReplace'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    margin: theme.spacing(1, 3, 1, 1),
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    color: '#FAFAFA',
  },
  button: {
    margin: theme.spacing(1),
    color: '#FAFAFA',
  },
}))

const Appbar = () => {
  const classes = useStyles()
  let history = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              item
              xs={9}
            >
              <Grid item xs="auto">
                <Typography variant="h6" className={classes.title}>
                  Desafío Técnico Ripley
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Button
                  onClick={() => history.push("/")}
                  disableRipple
                  className={classes.button}
                  startIcon={<SearchIcon />}
                >
                  <Typography variant="subtitle2">
                    Buscar
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Button
                  onClick={() => history.push("/add-product")}
                  disableRipple
                  className={classes.button}
                  startIcon={<AddIcon />}
                >
                  <Typography variant="subtitle2">
                    Añadir
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Button
                  onClick={() => history.push("/edit-product")}
                  disableRipple
                  className={classes.button}
                  startIcon={<FindReplaceIcon />}
                >
                  <Typography variant="subtitle2">
                    Modificar
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Button
                  onClick={() => history.push("/delete-product")}
                  disableRipple
                  className={classes.button}
                  startIcon={<RemoveIcon />}
                >
                  <Typography variant="subtitle2">
                    Eliminar
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              item xs={3}
              justify="flex-end"
              alignContent="flex-end"
            >
              <Grid item xs="auto">
                <Typography variant="h6" className={classes.title}>
                  Nicolás González
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar