import React from 'react'
import Propiedades from '../Propiedades/Propiedades'

const PropiedadesList = ({prop}) => {
  return (
    <div>

        {

            prop.map((item)=>{


                console.log(item)
                return <Propiedades  key={item.id} {...item} />

            })


        }


    </div>
  )
}

export default PropiedadesList