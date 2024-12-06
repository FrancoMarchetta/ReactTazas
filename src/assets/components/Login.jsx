import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const newpath = useNavigate();

    const goToHome = () => {
        newpath("/home");
    };

    const aprovedUser = "1234";
    const aprovedPassword = "1234";

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isLogged) {
            goToHome();
        }
    }, [isLogged]);

    const checkLogged = () => {
        if (user === aprovedUser && password === aprovedPassword) {
            setIsLogged(true);
        } else {
            console.log("Usuario o contraseña incorrectos");
        }
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />

            <section className='formulario'>
                <h1>Login</h1>
                <input
                    onChange={e => setUser(e.target.value)}
                    placeholder='Ingrese su usuario'
                    className='loginInputs'
                    type="text"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Ingrese su Contraseña'
                    className='loginInputs'
                    type="password"
                />

                <button onClick={checkLogged} style={{ borderRadius: "5px" }}>Iniciar sesion</button>
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    );
};

export default Login;
