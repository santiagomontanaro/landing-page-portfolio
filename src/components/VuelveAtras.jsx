import React from 'react'
import { Link } from 'react-router-dom'
import s from '../scss/Welcome.module.css'

function VuelveAtras() {
  return (
    <div>
      <div className={s.main}>
        <div className={s.main__text}>
          <h1>Recomiendo que no sigas,</h1>
          <h1>pero si insistes...</h1>
        </div>
        <div className={s.main__btns}>
          <Link to='/vuelve/atras/ya'>
            <button className={s.blue}>No digas que no te lo advertí</button>
          </Link>
          <Link to='/vuelve'>
            <button className={s.blue}>Vuelve ya a la página principal</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VuelveAtras
