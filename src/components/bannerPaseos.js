import { Typewriter } from 'react-simple-typewriter';
import '../css/bannerPaseos.css';

export const BannerPaseos = () => {


    return (
        <div id="arriba" className="banner-paseos">
            <div className='banner-paseos_contenedor'>
                {/* <h1> */}
                    {/* Ven y Disfruta de */}
                    <span className='banner-paseos__span'>
                    {/* Style will be inherited from the parent element */}
                        <Typewriter
                            className="span-typing"
                            words={[
                                    'Ven y Disfruta de Viajes en bote 24/7', 
                                    'Con tus amigos',
                                    'Con tu familia',
                                    'o con tu pareja',
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