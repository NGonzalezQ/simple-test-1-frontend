import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  textId: {
    fontSize: 10
  },
  media: {
    height: '0',
    paddingTop: '56.25%',
    width: 'auto'
  },
  pos: {
    marginBottom: 12
  }
})

const ProductCard = ({
  productBrand,
  productDescription,
  productImage,
  productName,
  productPrice,
  productId
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.textId}
          color="textSecondary"
          gutterBottom
        >
          ID: {productId}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {productBrand}
        </Typography>
        <Typography variant="h5" component="h2">
          {productName}
        </Typography>
        <Typography variant="body2" component="p">
          {productDescription}
          <br />
          {productPrice}
        </Typography>
      </CardContent>
      {productImage != null
        ? (
          <CardMedia
            className={classes.media}
            image={productImage}
          />
        )
        : null
      }
    </Card>
  )
}

export default ProductCard