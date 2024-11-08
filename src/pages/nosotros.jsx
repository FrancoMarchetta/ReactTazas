import { useNavigate } from 'react-router-dom';

function Nosotros() {
    return (
        <>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <!-- Main --> */}
            <main className="container">
                {/* <!-- Las mejores tazas --> */}
                <div className="row py-3 flex-column-reverse flex-md-column-reverse flex-lg-row align-items-center">
                    {/* <!-- Descripcion Cuphead --> */}
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="d-flex flex-column">
                            <h1 className="text-center text-sm-center text-md-center text-lg-start">
                                <strong>
                                    ¡Las Mejores Tazas!
                                </strong>
                            </h1>
                            <p className="text-center text-sm-center text-md-center text-lg-start lead">
                                Es original, útil y divertida. Lo que la convierte en un excelente regalo o souvenir.
                                Si buscas aumentar tus ingresos en tu tiempo libre, revenderlas es una buena idea para
                                emprender sin riesgos.
                                Es ideal para regalar a clientes y empleados, ya que podes poner tu logo y lograr que todos
                                recuerden tu marca.
                            </p>
                        </div>

                    </div>
                    {/* <!-- Cuphead Image --> */}
                    <div className="col-12 col-md-12 col-lg-6">
                        <img className="d-block w-100" src="../../public/images/foto1.jpg" alt="" />
                    </div>
                </div>
                {/* <!-- Nosotros --> */}
                <div className="row py-3 flex-column flex-md-column flex-lg-row align-items-center">
                    <div className="col-12 col-md-12 col-lg-6">
                        <img className="d-block w-100" src="../../public/images/foto2.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <h1 className="text-center text-sm-center text-md-center text-lg-start"><strong>¡Nosotros!</strong></h1>
                        <p className="text-center text-sm-center text-md-center text-lg-start lead">
                            Somos un emprendimiento nacido en Mendoza en el año 2022, conformado por un grupo
                            de amigos fanáticos del juego Cuphead.
                            Nuestro compromiso se basa en ofrecer tazas muy alta calidad basada en el juego
                            que tanto nos apasiona, como así también diseños únicos
                        </p>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Nosotros;