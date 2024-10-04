import './style.css'

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>¡Hola mundo! Soy Tomeu Provenzal !</h1>
`;


setupCounter(document.querySelector('#counter'))
