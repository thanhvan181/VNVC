import React from 'react'
import { Carousel } from 'react-bootstrap'


type Props = {}

const Banner = (props: Props) => {
  return (
    <div>

<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://api.bvptw.org/new_images/coronavirus-banner-x_32516d90_2dbd_4b7e_a339_391e3ad54950.png"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://healthid.ndhm.gov.in/static/media/mainbanner.00586187.svg"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.s3waas.gov.in/s32291d2ec3b3048d1a6f86c2c4591b7e0/uploads/2020/03/2020032094.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
    </div>
  )
}

export default Banner