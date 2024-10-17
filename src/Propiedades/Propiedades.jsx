import React from 'react'

const Propiedades = ({id,nombre,garage,habitaciones,metros2}) => {
  return (
    <>


        <h1>{nombre}</h1>
       
        {garage == true ? <h3>Garage: si</h3> : <h3>Garage: no</h3>}

        <h3>Habitaciones: {habitaciones}</h3>
        <h3>Metros cuadrados: {metros2}</h3>

    </>
  )
}

export default Propiedades