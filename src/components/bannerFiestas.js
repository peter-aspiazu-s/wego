import { Typewriter } from 'react-simple-typewriter';
import '../css/bannerFiestas.css';

export const BannerFiestas = () => {


    return (
        <div id="arriba" className="banner-fiestas">
            <div className='banner-fiestas_contenedor'>
                {/* <h1> */}
                    {/* Ven y Disfruta de */}
                    <span className='banner-fiestas__span'>
                    {/* Style will be inherited from the parent element */}
                        <Typewriter
                            className="span-typing"
                            words={[ 
                                    'Ven y Disfruta de Fiestas en bote', 
                                    'Ven con Tus Amigos y Pásala bien', 
                                    'Diversión asegurada!',
                                    'De Día, Tarde, Noche o incluso en la Madrugada',
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