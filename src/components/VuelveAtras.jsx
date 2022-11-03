import React from 'react'
import { Link } from 'react-router-dom'
import s from '../scss/Welcome.module.css'

function VuelveAtras() {
  return (
    <div>
      <div className={s.main}>
        <div className={s.main__text}>
          <h1>En serio, no hay nada</h1>
          <h1>pero si insistes...</h1>
        </div>
        <div className={s.main__btns}>
          <Link to='/vuelve/atras/ya'>
            <button className={s.blue}>Me gusta perder el tiempo</button>
          </Link>
          <Link to='/vuelve'>
            <button className={s.blue}>Volver ya mismo a la página principal</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VuelveAtras
