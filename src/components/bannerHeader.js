import { Typewriter } from 'react-simple-typewriter';
import '../css/bannerHeader.css';

export const BannerHeader = () => {


    return (
        <div className="banner-header">
            <div className='banner-header_contenedor'>
                {/* <h1> */}
                    {/* Ven y Disfruta de */}
                    <span className='banner-header__span'>
                    {/* Style will be inherited from the parent element */}
                        <Typewriter
                            className="span-typing"
                            words={[
                                    'Ven y Disfruta de Viajes 24/7', 
                                    'Ven y Disfruta de Fiestas en bote', 
                                    'Ven y Disfruta de Turismo en bote', 
                                    'Diversión asegurada!',
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