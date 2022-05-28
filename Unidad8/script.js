let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let error = false;

  let nombre = document.querySelector('#nombre');
  let clave = document.querySelector('#clave');
  

  if (nombre.value == '') {
    let errorNombre = document.querySelector('#error-nombre');
    errorNombre.textContent = 'El nombre es obligatorio';

  } else if (nombre.value.includes('@') == false) {
    let errorNombre = document.querySelector('#error-nombre');
    errorNombre.textContent = 'Falta el arroba en el usuario';
  } else if (clave.value == '') {
    let errorNombre = document.querySelector('#error-nombre');
    errorNombre.textContent = ''
    let errorclave = document.querySelector('#error-clave');
    errorclave.textContent = 'La clave es obligatoria';
    error = true;
  }else if (error == false) {
    form.submit();
    alert('Submit exitoso');
  }
});
