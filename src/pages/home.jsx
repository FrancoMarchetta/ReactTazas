import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0(); // Hook de Auth0
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
                    <h1 className="text-center" style={{ color: '#f1c40f' }}>¡Bienvenido a Cup Head!</h1>
                    <div className="mt-4"></div>
                    <div className="mt-4"></div>
                    <p className="text-center text-sm-start lead">
                    Cup Head es una marca innovadora de tazas diseñada para quienes buscan estilo y
                        funcionalidad en su día a día. Cada taza combina materiales de alta calidad con diseños únicos y divertidos,
                        inspirados en personajes y formas modernas.
                    </p>
                    <div className="mt-4"></div>
                    <p className="text-center text-sm-start lead">
                    <strong>🌟 Estilo y calidad en cada detalle.</strong> <br />
        <strong>💡 Diseños que se adaptan a ti.</strong> <br />
        <strong>☕ Perfectas para tu café, té o esa bebida que te encanta.</strong>
                    </p>
                    <div className="mt-4"></div>
{/* Descubre todas las posibilidades */}
<div className="mt-5 text-center">
                <p style={{ color: '#f39c12', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    ¡Descubre todas las posibilidades!
                </p>
            </div>

            <div className="mt-4"></div>
                    

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
                                onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173" } })

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
