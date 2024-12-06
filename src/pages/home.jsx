import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 

function Home() {
    const { loginWithRedirect,logout, isAuthenticated, user } = useAuth0(); // Hook de Auth0
    return (
        <main className="container bodyclassname">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row py-3">
                {/* <!-- Carousel --> */}
                <div className="col col-12 col-md-12 col-lg-6">
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item d-flex" data-bs-interval="2000">
                                <img
                                    src="../public/images/tazon_bart.jpeg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item active" data-bs-interval="2000">
                                <img
                                    src="../public/images/alien.png"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img
                                    src="../public/images/goty-taza.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Hero --> */}
                <div className="col col-12 col-md-12 col-lg-6 py-3">
                    <h1 className="text-center">Las Mejores Tazas</h1>

                    <p className="text-center text-sm-start lead">
                     Cup Head es una marca innovadora de tazas diseñada para quienes buscan estilo y
                     funcionalidad en su día a día. Cada taza combina materiales de alta calidad con diseños únicos y divertidos,
                     inspirados en personajes y formas modernas.
                    </p>
                    <p className="text-center text-sm-start lead">
                    Desde diseños clásicos hasta ediciones limitadas,
                     Cup Head ofrece opciones para todos los gustos. 
                     Ya sea que disfrutes tu café por la mañana o un té relajante por la tarde,
                     nuestras tazas están hechas para acompañarte en cada momento especial. 
                     Descubre más sobre nuestra colección y encuentra tu nueva taza favorita en Cup Head.
                     Desde diseños clásicos hasta ediciones limitadas, Cup Head ofrece opciones para todos los gustos.
                     Ya sea que disfrutes tu café por la mañana o un té relajante por la tarde, 
                     nuestras tazas están hechas para acompañarte en cada momento especial. 
                     Descubre más sobre nuestra colección y encuentra tu nueva taza favorita en Cup Head.
                    </p>
 {/* Botón de Login */}
 {!isAuthenticated ? (
                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={loginWithRedirect}
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h5>¡Bienvenido, {user.name}!</h5>
                            <button
                                className="btn btn-danger btn-lg"
                                onClick={() => logout({ logoutParams: {returnTo: "http://localhost:5173" }})
                            
                            }
                            >
                                Cerrar Sesión
                            </button>

                        </div>
                    )}


                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
        </main>
    );
}

export default Home;
