//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

//Eventos
eventListeners();
function eventListeners() {
     listaCursos.addEventListener('click', agregarCurso);
}


//Funciones
function agregarCurso(e) {
     e.preventDefault();

     if( e.target.classList.contains('agregar-carrito') ) {
          const cursoSeleccionado = e.target.parentElement.parentElement;

          leerDatosCursos(cursoSeleccionado);
     }

}

function leerDatosCursos(curso) {
     console.log(curso);

     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'),
          cantidad: 1,

     }

     articulosCarrito = [...articulosCarrito, infoCurso];

     carritoHTML();
}

function carritoHTML() {

     limpiarHTML();

     articulosCarrito.forEach( curso => {

          const { imagen, titulo, precio, id, cantidad } = curso

          const row = document.createElement('tr');
          row.innerHTML = `
          <td>${titulo}</td>
          `

          contenedorCarrito.appendChild(row);
     })
}

function limpiarHTML() {

     while (contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild)
     }
}

