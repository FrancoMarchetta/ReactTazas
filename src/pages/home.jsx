import { useNavigate } from 'react-router-dom';
function Home() {

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
                        molestiae. Veritatis voluptas quo, praesentium consequuntur earum
                        ducimus fuga obcaecati ipsum accusantium corrupti. Ea fugit quasi
                        ipsum deleniti eius officia et.
                    </p>
                    <p className="text-center text-sm-start lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        illum quos atque ducimus. Nostrum esse quia at, quaerat possimus
                        nihil tempore error perferendis quos neque. Voluptate praesentium
                        sint magnam? Officiis!
                    </p>
                    <p className="text-center text-sm-start lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        illum quos atque ducimus. Nostrum esse quia at, quaerat possimus
                        nihil tempore error perferendis quos neque. Voluptate praesentium
                        sint magnam? Officiis!
                    </p>
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
