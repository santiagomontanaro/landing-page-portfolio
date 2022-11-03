import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import s from '../scss/Jump.module.css'

function Jump() {
  return (
    <div className={s.main}>
      <div className={s.text}>
        <h1>Ves? No hay nada, la próxima hazme caso y también hazme caso cuando te digo que me contactes para una oferta de trabajo ;)</h1>
        <Link to='/'>
          <button className={s.button}>Volver</button>
        </Link>
      </div>
    </div>
  )
}

export default Jump