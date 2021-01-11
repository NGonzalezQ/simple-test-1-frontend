import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1.3),
    marginTop: theme.spacing(1)
  },
  text: {
    margin: theme.spacing(1)
  }
}))

const Instructions = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Paper>
        <Typography className={classes.text} variant='h6'>
          Instrucciones de búsqueda
        </Typography>
        <Typography className={classes.text} variant='subtitle1'>
          · Búsqueda vacía retorna todos los productos.
        </Typography>
        <Typography className={classes.text} variant='subtitle1'>
          · Búsqueda por ID retorna un producto único que concuerda con su ID.
          Los ID son números enteros.
        </Typography>
        <Typography className={classes.text} variant='subtitle1'>
          · Búsqueda por texto retorna la concordancia acorde al nombre, marca
          o descripción.
        </Typography>
        <Typography className={classes.text} variant='subtitle1'>
          · Si la búsqueda de texto es un palíndromo, retorna productos con 20%
          de descuento en el precio.
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Instructions