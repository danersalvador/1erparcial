const formulario = document.getElementById('formulario');
const recuadro = document.getElementById('cuadro');

function aplicarColor() {
  const color = new FormData(formulario).get('color');
  recuadro.style.backgroundColor = color;
}
document.getElementById('color').addEventListener('input', aplicarColor);

document.getElementById('boton').addEventListener('click', function () {
  document.getElementById('color').click();
});