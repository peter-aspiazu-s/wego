import "../css/ubicacion.css";

export const Ubicacion = () => {
    return (
        <div className="ubicacion">
            <h2 className="ubicacion-h2">Ubicación</h2>
            <div className="ubicacion-contenedor">
                {/* <img className="ubicacion-img" src="./assets/img/hombre-abajo.webp" /> */}
                <img className="ubicacion-img" src="./assets/img/hombre-señal.webp" />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.54832570159!2d-80.21018228024064!3d25.81022472013098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1655349812074!5m2!1ses-419!2sec" 
                    className="google-map"
                    // width="400" 
                    // height="300" 
                    // style={{border:0}}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}