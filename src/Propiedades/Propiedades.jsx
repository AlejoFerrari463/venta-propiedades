import React from 'react'

import "./Propiedades.css"



const Propiedades = ({id, nombre, garage, habitaciones, metros2, imagen1, imagen2, imagen3, banos, planta, ascensor}) => {
  return (
    <>

      <div className='propiedades-contenedor' >

        <div className='propiedad-card mt-5' >


        <div>

          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className='propiedad-imagen' src={imagen1} alt={nombre} />
                </div>
                <div className="carousel-item">
                  <img className='propiedad-imagen' src={imagen2} alt={nombre} />
                </div>
                <div className="carousel-item">
                  <img className='propiedad-imagen' src={imagen3} alt={nombre} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className='ms-3' >

          <h1>{nombre}</h1>

          <h3>Habitaciones: {habitaciones}</h3>
          <h3>Baños: {banos}</h3>
          <h3>{metros2}m2</h3>
          {ascensor == true ? <h3>{planta} con ascensor</h3> : <h3>{planta} sin ascensor</h3>}
            
          {garage == true ? <h3>Garage: si</h3> : <h3>Garage: no</h3>}

        </div>


        </div>

        <div className='propiedad-card mt-5' >


        <div>

          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className='propiedad-imagen' src={imagen1} alt={nombre} />
                </div>
                <div className="carousel-item">
                  <img className='propiedad-imagen' src={imagen2} alt={nombre} />
                </div>
                <div className="carousel-item">
                  <img className='propiedad-imagen' src={imagen3} alt={nombre} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className='ms-3' > 

          <h1>{nombre}</h1>

          <h3>Habitaciones: {habitaciones}</h3>
          <h3>Baños: {banos}</h3>
          <h3>{metros2}m2</h3>
          {ascensor == true ? <h3>{planta} con ascensor</h3> : <h3>{planta} sin ascensor</h3>}
            
          {garage == true ? <h3>Garage: si</h3> : <h3>Garage: no</h3>}

        </div>


        </div>



      </div>

    

      
       

    </>
  )
}

export default Propiedades