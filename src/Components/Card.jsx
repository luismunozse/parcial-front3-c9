import React from 'react'

const Card = ({auto, setBuscarAuto}) => {
  return (
    <div className='card'>
        <img src={auto.img} className='card-img' />
        <h3>{auto.marca} {auto.modelo}</h3>
        <button onClick={() => setBuscarAuto(true)}>Comprar</button>
    </div>
    
  )
}

export default Card