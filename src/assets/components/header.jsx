import { useNavigate } from 'react-router-dom';

function Header() {

    const newpath = useNavigate();
    const goToNosotros = () => {
        newpath("/Nosotros");
    }
    const goToHome = () => {
        newpath("/");
    }
    const goToTazas = () => {
        newpath("/Tazas");
    }
    const goToTazones = () => {
        newpath("/Tazones");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a onClick={goToHome} className="navbar-brand" href="#">
                    <img
                        onClick={goToHome}
                        style={{ width: "2cm", marginRight: "1cm", marginLeft: "2cm" }} //
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
                        <a onClick={goToHome} className="nav-link active" aria-current="page" href="#">
                            Home🏠
                        </a>
                        <a onClick={goToNosotros} className="nav-link" href='' >
                            Nosotros🫂
                        </a>

                        <a onClick={goToTazas} className="nav-link" href='' >
                            Tazas🍵
                        </a>
                        <a onClick={goToTazones} className="nav-link" href='' >
                            Tazones🍵
                        </a>
                        <a className="nav-link" >
                            Carrito🛒
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Header;
