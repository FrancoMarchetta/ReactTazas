function Footer() {
    return (
        <footer className="footer mt-auto h-auto py-3">
            <div className="container">
                <div className="row">
                    {/* Redes */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <h5 className="nav__title">Nuestras Redes</h5>
                        <ul className="nav flex-column">
                            {/* Instagram */}
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="https://www.instagram.com/p/C7qH9potF5G/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-instagram"></i> cuphead.tazas
                                </a>
                            </li>
                            {/* Facebook */}
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="https://www.facebook.com/search/top/?q=Franco%20Marchetta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-facebook"></i> cuphead.tazas
                                </a>
                            </li>
                            {/* Twitter */}
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="https://twitter.com/frannmarchetta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-x-twitter"></i> cuphead.tazas
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <h5 className="nav__title">Contacto</h5>
                        <ul className="nav flex-column">
                            {/* Whatsapp */}
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://wa.me/2615007853?text=¡Hola, quiero saber más sobre tus productos!">


                                    <i className="fa-brands fa-whatsapp"></i> 2615007853

                                  

                                </a>
                            </li>
                            {/* Teléfono */}
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">
                                    <i className="fa-solid fa-phone"></i> 43212654
                                </a>
                            </li>
                            {/* Dirección */}
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Av.+San+Mart%C3%ADn+505,+M5500+Mendoza/@-32.8976318,-68.8411937,17z/data=!4m6!3m5!1s0x967e0913ffb9ea9f:0x3782556c2212e85b!8m2!3d-32.8976847!4d-68.8408093!16s%2Fg%2F11jgxn8jxz?entry=ttu"
                                >
                                    <i className="fa-solid fa-location-dot"></i> Av. San Martín
                                    505, Capital, Mendoza, Argentina.
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Medios de Pago */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <h5 className="nav__title">Medios de Pago</h5>
                        <div id="imagenesPago" className="d-flex flex-wrap">
                            <img
                                className="d-block h-100 img__logo"
                                src="../public/images/mercado pago.png"
                                alt="Mercado Pago"
                            />
                        </div>
                    </div>

                    {/* Medios de Envío */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <h5 className="nav__title">Medios de Envío</h5>
                        <div id="imagenesEnvio" className="d-flex flex-wrap">
                            <img
                                src="../public/images/andreani.png"
                                alt="Andreani"
                                className="d-block w-100 img__logo"
                            />
                            <img
                                src="../public/images/correo.png"
                                alt="Correo"
                                className="d-block w-100 img__logo"
                            />
                            <img
                                src="../public/images/oca.png"
                                alt="OCA"
                                className="d-block w-100 img__logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
