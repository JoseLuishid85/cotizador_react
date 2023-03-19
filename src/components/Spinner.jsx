import React from 'react'
import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner">
        <span className='text-center my-5'>Cargando</span>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
    
  )
}

export default Spinner