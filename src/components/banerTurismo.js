import { Typewriter } from 'react-simple-typewriter';
import '../css/bannerTurismo.css';

export const BannerTurismo = () => {


    return (
        <div id="arriba" className="banner-turismo">
            <div className='banner-turismo_contenedor'>
                {/* <h1> */}
                    {/* Ven y Disfruta de */}
                    <span className='banner-turismo__span'>
                    {/* Style will be inherited from the parent element */}
                        <Typewriter
                            className="span-typing"
                            words={[
                                    'Ven y Disfruta de Turismo en bote', 
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