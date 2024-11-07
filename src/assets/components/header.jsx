function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        style={{ width: "2cm" }}
                        src="../public/images/truelogo.jpg"
                    ></img>
                    |Cuphead|
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home🏠
                        </a>
                        <a className="nav-link" href="">
                            nosotros🫂
                        </a>
                        <a className="nav-link" href="#">
                            tazas🍵
                        </a>
                        <a className="nav-link" href="#">
                            tazones🍵
                        </a>
                        <a className="nav-link" href="">
                            carrito🛒
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
