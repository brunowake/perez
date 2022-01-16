import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import perez from '../../img/perez.jpg'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > * + * ': {
            margin: theme.spacing(1),
            [theme.breakpoints.down('md')]: {
                fontSize: 12
            }
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        [theme.breakpoints.down('lg')]: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        }
    },

}));


export default props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div ><Avatar className={classes.large} src={perez} /></div>
            <Typography variant="h4" align="center">
                Formado em Direito pela Universidade UniToledo - Araçatuba/SP
            </Typography>
            <Typography variant="h5" align="center">
                Pós Graduado em Direito Civil e Direito Empresarial pelo Damásio Educacional
            </Typography>

        </div>
    )
}