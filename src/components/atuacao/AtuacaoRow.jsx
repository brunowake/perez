import React from 'react'
import { Grid, Typography, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 30
        
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 30
    },
    line: {
        borderBottom: 'solid 1px #202020',
        width: '98%',
        height: '25%',
        padding: '20px',
        "&:hover" : {
            backgroundColor: '#f2f2f255'
        }


    },
}))



export default (props) => {

    const classes = useStyles()

    return (
        <Grid container spacing={1} xl={12} alignItems='center' justify='space-between' className={classes.line}>
                <Grid item xl={3} lg={3}>
                    <Typography variant="h5" component="h5" style={{color: '#242423'}}>
                        {props.atuacoes.title}
                    </Typography>
                    <Typography variant="subtitle1" style={{color: '#848383'}}>
                        {props.atuacoes.subTitle}
                    </Typography>
                </Grid>
                <Grid item xl={3} lg={3} sm={6}>
                    <ButtonBase className={classes.image}>
                        <img alt="img" src={props.atuacoes.Img} className={classes.img} />
                    </ButtonBase>
                </Grid>
                <Grid item xl={6} lg={6} sm={12}>
                    <Typography variant="body2" style={{color: '#0b0c0c'}}>
                        {props.atuacoes.text}
                    </Typography>
                </Grid>
  
        </Grid>
    )
}