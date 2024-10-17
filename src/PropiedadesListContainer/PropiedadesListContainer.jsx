import React from 'react'

import "./PropiedadesListContainer.css"

import { useState, useEffect } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../services/Config'
import PropiedadesList from '../PropiedadesList/PropiedadesList'

const PropiedadesListContainer = () => {

  const [propiedades, setPropiedades] = useState([])


  useEffect(()=>{


    const obtenerProp = collection(db,"propiedades")


    getDocs(obtenerProp)
    .then((res)=>{

        const filtrarPropiedades = res.docs.map((doc)=>{

          const info = doc.data();
          return{id: doc.id,...info}


      })

      setPropiedades(filtrarPropiedades)


    })


  },[])


  return (
    <div className='container-fluid' >

      <PropiedadesList prop={propiedades} />

    </div>
  )
}

export default PropiedadesListContainer