import React from 'react'

export const Footer = () => {
    return (
        <footer style={{ fontSize: 14 }}>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div>
                        <div>
                            <h5>Encuentranos</h5>
                            <p className="mb10">ESTAMOS UBICADOS EN: Plaza Central 87 ~ Torre Latinoamericana</p>
                            <p><i className="fa fa-location-arrow"></i> ~ Eje Central Lázaro Cárdenas 87, Colonia Centro, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX</p>
                            <p>
                                <i className="fa fa-phone"></i> ~ Planta Baja, #100-P
                                <a href="https://wa.me/message/ETTWEY7GULOOK1" target="_blank"> Whatsapp </a>
                            </p>
                            <p>
                                <i className="fa fa-phone"></i> ~ 2do piso, #320-321
                                <a href="https://api.whatsapp.com/send?phone=5632955227" target="_blank"> Whatsapp</a>
                            </p>
                            <p><i className="fa fa-location-arrow"></i> ~ Piso 20 de la Torre Latinoamericana, Centro Histórico de la Ciudad de México.</p>
                            <p><i className="fa fa-phone"></i> ~ Ingeniería móvil - <a href="https://api.whatsapp.com/send?phone=5617653201" target="_blank">Whatsapp</a></p>
                            <p><i className="fa fa fa-envelope"></i> ~ info@xplcdfactory.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6058356150807!2d-99.14413768579251!3d19.42942944581842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fed45ccbd561%3A0xa3e8f245d4172d82!2sPlaza%20Central%2087!5e0!3m2!1ses!2smx!4v1656569235373!5m2!1ses!2smx" width={400} height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <p className="text-center"> Iconos creados por  <a href="https://www.flaticon.es" target="_blank">Freepik - Flaticon</a></p>
            <p className="text-center">@MG & @SJ</p>
        </footer>
    )
}
