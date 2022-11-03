import React from 'react'
import { Link } from 'react-router-dom'
import s from '../scss/Welcome.module.css'

function Welcome() {
  return (
    <div className={s.main}>
      <div className={s.main__text}>
        <h1>¡Hola! Bienvenido a mi portfolio</h1>
        <h2><mark className={s.blue}>Antes que nada...</mark></h2>
        <p>Una de las opciones contiene el mejor C.V que vas a ver en tu vida, y la otra opción es... aburrida. Elige sabiamente porque no hay vuelta atrás (creo... 👀).</p>
      </div>
      <div className={s.main__btns}>
        <a href="https://santiagomontanaro.github.io/sm-portfolio/"><button className={s.blue}>Si sos un recruiter serio, elige esta opción 😴💤</button></a>
        <a href="https://open.spotify.com/playlist/2suh095hg4M52p4zFKxo9W?si=3181765835bc463a" target='_blank' rel="noreferrer"><button className={s.blue}>Si te gusta lo atípico, esta opción es mejor y quizás encuentres algo bueno para escuchar *guiño guiño*</button></a>
        <Link to='/vuelve'>
          <button className={s.blue}>Acá no hay nada</button>
        </Link>
      </div>
    </div>
  )
}

export default Welcome
