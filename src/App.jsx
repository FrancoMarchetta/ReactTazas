import { useState } from 'react'
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Home from './pages/home'
import Nosotros from './pages/nosotros'
import Card from './assets/components/Card';
import CatalogoTazas from './pages/CatalogoTazas';
import CatalogoTazones from './pages/CatalogoTazones';

function App() {

  return (
    <>

      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="/Tazas" element={<CatalogoTazas></CatalogoTazas>}></Route>
          <Route path="/Tazones" element={<CatalogoTazones></CatalogoTazones>}></Route>


        </Routes >

        <Footer></Footer>
      </Router >


    </>
  )
}

export default App
