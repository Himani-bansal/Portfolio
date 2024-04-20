import React from 'react';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const MyCarousel = (props) => (
    <div className='services '>
        <Carousel
            className='slider d-flex flex-column
            justify-content-center
            position-relative  border border-rounded
            '
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={1500}
            showThumbs={false}
        >

            <div
                className="banner"
                style={{ backgroundImage: `url(${props.img1})` }}

            >

            </div>


            <div
                className="banner"
                style={{ backgroundImage: `url(${props.img2})` }}

            >
            </div>
            <div
                className="banner"
                style={{ backgroundImage: `url(${props.img3})` }}

            >

            </div>


        </Carousel>
    </div>

)

export default MyCarousel;
