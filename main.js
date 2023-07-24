function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

function escribirMensaje(mensaje, velocidad) {
  const mensajeElement = document.getElementById('mensaje');
  const texto = mensaje.split('');
  let i = 0;

  function escribirCaracter() {
    if (i < texto.length) {
      mensajeElement.textContent += texto[i];
      i++;
      setTimeout(escribirCaracter, velocidad);
    }
  }

  escribirCaracter();
}

function mostrarPato() {
  const patitosContainer = document.querySelector('.patitos-container');
  const buttonMostrar = document.querySelector('.btnMessage');
  const patoDiv = document.createElement('div');

  buttonMostrar.disabled = true;
  patoDiv.className = 'patito-te-quiero';
  patoDiv.innerText = '💖 Te quiero 💖';
  
  patitosContainer.appendChild(patoDiv);
  
  

  escribirMensaje("Querido Santi: \n Sinceramente sos la única persona que no me ha abandonado a pesar de lo difícil que puedo llegar a ser, que me acepta con todos mis problemas, errores y defectos. Por eso gracias, gracias por seguir acá conmigo. Ninguna distancia va a impedir que te adore con toda mi alma. Dada la inmensidad del tiempo y la inmensidad del universo, es un inmenso placer para mí compartir un planeta y una época con vos.", 50);
}
