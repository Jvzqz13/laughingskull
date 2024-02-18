import Carousel from 'react-bootstrap/Carousel'
import laughingSkull from '../images/laughing.png'
import laughingSkull1 from '../images/laughingskull_courtesy.jpg'
import laughingSkull2 from '../images/LSinside.jpg'


function CarouselHome() {
    return (

        <Carousel>
        <Carousel.Item>

            <img src={laughingSkull} alt='laughing' />
          {/* <ExampleCarouselImage text="First slide" /> */}
          
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <img src={laughingSkull1} alt='laughing2'  />
          {/* <ExampleCarouselImage text="Second slide" /> */}
          
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <img src={ laughingSkull2 } alt='laughing3' />
          {/* <ExampleCarouselImage text="Third slide" /> */}
          
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    )
}

export default CarouselHome;