import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';
import ImgMediaCard from '../card/Card';

export default () => {

    return (
        <div>
            <Carousel
            infinite
            centered
            dots
            slidesPerPage={3}

            >
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
            </Carousel>
        </div>
    )
}