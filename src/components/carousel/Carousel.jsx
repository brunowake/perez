import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImgMediaCard from '../noticia/noticiaCard';
import { Container, makeStyles } from '@material-ui/core'
import noticias from '../../data/noticias.json'

const UseStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
        '& > * > * + *': {
            marginTop: '40px',
            borderRadius: 15,
        },
        '& > * > * > li': {
            margin: 3,
            borderRadius: 15,
        },
        '& > * > * > li > button': {
            borderRadius: 15,
        }
    }

}))


export default () => {

    const getNoticias = noticias.noticias

    const createCard = getNoticias.map((noticia,index) => {
        
        return <ImgMediaCard noticia={noticia} key={index}/>
    })


    const classes = UseStyles()

    return (
        <Container className={classes.root}>
            <Carousel
                infinite
                offset={20}
                autoPlay={5000}
                animationSpeed={2000}
                dots
                centered
                slidesPerPage={3}
                breakpoints={{
                    850: { 
                      slidesPerPage: 2,
                      centered: false,
                      offset: 10
                    },
                    450: {
                        slidesPerPage: 1
                    }
                  }}

            >
                {createCard}
            </Carousel>
        </Container>
    )
}