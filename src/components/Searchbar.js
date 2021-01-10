import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '80%',
    flexGrow: 1
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  button: {
    paddingBottom: theme.spacing(0.8),
    backgroundColor: fade(theme.palette.primary.main, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.65)
    },
  }
}))

const Searchbar = ({ handleTextChange, searchItem }) => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={6}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar producto"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
            fullWidth
            onChange={(event) => handleTextChange(event)}
          />
        </div>
      </Grid>
      <Grid item xs={3}>
        <Button
          className={classes.button}
          variant="contained"
          size="small"
          onClick={searchItem}
        >
          <Typography variant="subtitle2">
            Buscar
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default Searchbar