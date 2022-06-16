import Carousel from 'react-bootstrap/Carousel';
import { Typewriter } from 'react-simple-typewriter';
import "../css/galeria.css";

export const PresentacionImagen = () => {
    return(
        <div className='carousel-conteneder container'>
            <h2>Presentación de Imagenes</h2>
            <div className='carousel-contenedor-div'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel1.jpeg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel2.jpeg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel3.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel4.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel5.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel6.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel7.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel8.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel9.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel10.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel11.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel12.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel13.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel14.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel15.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel16.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel17.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel18.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel19.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel20.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel21.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel22.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-carousel"
                        src="./assets/img/img-carousel23.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='carrusel-contenedor-typing'>
            {/* <h1> */}
                    {/* Destinos Turisticos   */}
                    <span className='banner-header__span'>
                    {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[
                                    'Destinos Turisticos La Islita', 
                                    'Destinos Turisticos Star Island', 
                                    'Destinos Turisticos Peanut Island', 
                                    'Destinos Turisticos Bear Cut',
                                    'Destinos Turisticos Nixon Beach',
                                    'Destinos Turisticos Haul Over',
                                    'Destinos Turisticos Monument Island',
                                    '¿Qué esperas? Ven y Disfruta!'
                                ]}
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                {/* </h1> */}
            </div>
        </div>
    )
}