import React from 'react'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import './Menu.css'
import 'fullpage.js'


const UseStyles = makeStyles((theme) => ({
    root: {
      '& > * ': {
        padding: theme.spacing(2),
        height: 48,
        color: 'white',
        fontSize: '.8rem',
        
      },
      '& > *:active': {
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
        borderRadius: '10px'
      }
    },

    menu:{
        zIndex: '10',
        background: 'rgba(00, 00, 00, 0.4)',
        justifyContent: 'space-between'
    }
  }));


function nav(props) {
    const classes = UseStyles();

    return (
        <React.Fragment>
            <Toolbar variant="dense" className={classes.menu}>
                <h1>Logo</h1>
                <Typography
                    className={classes.root}
                    component="nav"
                    variant="button"
                    color="primary"
                    align="right"
                    display="inline"
                    
                >
                    <Link href="#firstPage" color="primary" component="a" >Home</Link>
                    <Link href="#secondPage" color="primary" component="a">Áreas de atuação</Link>
                    <Link href="#thirdPage" color="primary" component="a">Notícias</Link>
                    <Link href="#fourthPage" color="primary" component="a">Contato</Link>
                    <Link href="#fifthPage" color="primary" component="a">Mídia</Link>
                    <Link href="#sixthPage" color="primary" component="a">Profissional</Link>
                </Typography>
            </Toolbar>
        </React.Fragment>

    )
}

export default nav