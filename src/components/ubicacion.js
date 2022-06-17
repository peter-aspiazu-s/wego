import "../css/ubicacion.css";

export const Ubicacion = () => {
    return (
        <div id="ubicacion" className="ubicacion">
            <h2 className="ubicacion-h2">Ubicación</h2>
            <div className="ubicacion-contenedor">
                <img className="ubicacion-img" src="./assets/img/hombre-señal.webp" />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5982886234483!2d-80.210877485419!3d25.7838289836267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6bf9afe9451%3A0x6b3ac25499852e8f!2s816%20NW%2011th%20St%2C%20Miami%2C%20FL%2033136%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1655417964348!5m2!1ses-419!2sec"
                    className="google-map"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}