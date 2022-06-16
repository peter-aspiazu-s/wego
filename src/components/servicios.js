import { Card, Button } from 'react-bootstrap'
import '../css/servicios.css'

export const Servicios = () => {
    return (
        <section className="servicios">
            <h2>
                Servicios
            </h2>
            <div>
                <article className='servicios-article'>
                    <Card className='card-servicios'>
                        <Card.Img variant="top" src="./assets/img/paseo-en-bote.webp" />
                        <Card.Body>
                            <Card.Title className="servicios-card-title">Viajes en bote 24/7</Card.Title>
                            <Card.Text className="servicios-card-text">
                            Ven y disfruta de los viajes en bote a cualquier hora, sea de día, tarde o noche, atendemos 24/7.
                            </Card.Text>
                            <Button className='btn-servicios' variant="primary">Ver más</Button>
                        </Card.Body>
                    </Card>
                </article>

                <article className='servicios-article'>
                    <Card className='card-servicios'>
                    <Card.Img variant="top" src="./assets/img/turismo-en-bote.webp" />
                    <Card.Body>
                        <Card.Title className="servicios-card-title">Viajes Guíados</Card.Title>
                        <Card.Text className="servicios-card-text">
                        Deseas conocer la historia de esta maravillosa costa? Los viajes guíados son para ti.
                        </Card.Text>
                        <Button className='btn-servicios' variant="primary">Ver más</Button>
                    </Card.Body>
                    </Card>
                </article>

                <article className='servicios-article'>
                    <Card className='card-servicios'>
                    <Card.Img variant="top" src="./assets/img/fiesta-en-bote.webp" />
                    <Card.Body>
                        <Card.Title className="servicios-card-title">Fiestas en bote</Card.Title>
                        <Card.Text className="servicios-card-text">
                        Quieres divertirte a lo grande? Ten una de las mejores fiesta de tu vida en nuestros botes, diviertete a lo máximo.
                        </Card.Text>
                        <Button className='btn-servicios' variant="primary">Ver más</Button>
                    </Card.Body>
                    </Card>
                </article>
            </div>  
        </section>
    )
}