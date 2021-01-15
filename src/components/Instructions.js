import React, { useState } from 'react'
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

const Instructions = ({ type }) => {
  const [instructionType, setInstructionType] = useState()
  const classes = useStyles()

  switch (type) {
    case "search":
      return (
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
      )
    case "add":
      return (
        <Paper>
          <Typography className={classes.text} variant='h6'>
            Instrucciones para agregar producto
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Los campos marcados como requeridos deben llevar datos.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Los datos son tipo texto, excepto precio que es un número.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Para agregar una imagen se debe colocar una URL directa.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Una vez añadidos los campos se debe presionar el botón Añadir.
          </Typography>
        </Paper>
      )
    case "edit":
      return (
        <Paper>
          <Typography className={classes.text} variant='h6'>
            Instrucciones para editar un producto
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Los campos marcados como requeridos deben llevar datos.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · El campo ID debe coincidir con un producto de la base de datos.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Para agregar una imagen se debe colocar una URL directa.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · El campo de precio sólo acepta números.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Una vez añadidos los campos se debe presionar el botón Editar.
          </Typography>
        </Paper>
      )
    case "delete":
      return (
        <Paper>
          <Typography className={classes.text} variant='h6'>
            Instrucciones para eliminar un producto
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · Se debe colocar el ID exacto del producto.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · El campo no puede estar vacío.
          </Typography>
          <Typography className={classes.text} variant='subtitle1'>
            · El producto se elimina de la base de datos al presionar Eliminar.
          </Typography>
        </Paper>
      )
    default:
      return null
  }
}

export default Instructions