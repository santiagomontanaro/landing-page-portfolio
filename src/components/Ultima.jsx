import React from 'react'
import { Link } from 'react-router-dom'
import s from '../scss/Welcome.module.css'

function Ultima() {
  return (
    <div>
      <div className={s.main}>
        <div className={s.main__text}>
          <h1>Esta es tu última oportunidad,</h1>
          <h1>¿Querés volver a la página principal?</h1>
        </div>
        <div className={s.main__btns}>
          <Link to='/vuelve/atras/ya/jump'>
            <button className={s.blue}>No, quiero seguir porque ando de curioso y no me importa nada</button>
          </Link>
          <Link to='/'>
            <button className={s.blue}>Sí, quiero volver a la página principal</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Ultima