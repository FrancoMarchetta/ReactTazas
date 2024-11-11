import { useState } from 'react'
import { useEffect } from 'react';
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Home from './pages/home'
import Nosotros from './pages/nosotros'
import Card from './assets/components/Card';
import CatalogoTazas from './pages/CatalogoTazas';
import CatalogoTazones from './pages/CatalogoTazones';
import Carrito from './pages/Carrito';



function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (productId, name, image) => {
    const carritoExistente = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = [...carritoExistente, { productId, name, image }];
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  };

  useEffect(() => {
    // Cargar el carrito desde localStorage al iniciar la aplicación
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);





  return (
    <>

      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="/Tazas" element={<CatalogoTazas agregarAlCarrito={agregarAlCarrito}></CatalogoTazas>}></Route>
          <Route path="/Tazones" element={<CatalogoTazones agregarAlCarrito={agregarAlCarrito}></CatalogoTazones>}></Route>
          <Route path="/Carrito" element={<Carrito carrito={carrito}></Carrito>}></Route>



        </Routes >

        <Footer></Footer>
      </Router >


    </>
  )
}

export default App
