import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles({
  root: {
    maxWidth: '90%',
    textAlign: 'center',
    backgroundColor: '#edf2f4'
  },
  btn: {
    justifyContent: 'end'
  },
  link: {
    textDecoration: 'none'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>

      <CardContent>
        <Typography variant="h5" component="h2">
          {props.noticia.titulo}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.noticia.descricao}
        </Typography>
      </CardContent>

      <CardActions className={classes.btn}>
        <Button size="small" color="primary" >
          <a className={classes.link} href={props.noticia.link} target="_blank">Veja mais </a>   
        </Button>
      </CardActions>
    </Card>
  )
}