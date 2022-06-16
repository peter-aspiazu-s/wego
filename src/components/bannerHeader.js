import '../css/bannerHeader.css';
import { Typewriter } from 'react-simple-typewriter';
    // import 'react-simple-typewriter/dist/index.css';

export const BannerHeader = () => {


    return (
        <div className="banner-header">
            <div className='banner-header_contenedor'>
                <h1>
                    Ven y Disfruta de 
                    <span className='banner-header__span'>
                    {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[
                                    'Viajes 24/7', 
                                    'Fiestas en bote', 
                                    'Turismo en bote', 
                                    'Diversión asegurada!'
                                ]}
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
        </div>
    )
}