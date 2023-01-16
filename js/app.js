const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

eventListeners();
function eventListeners(){
     listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
     e.preventDefault();
     console.log(e.target.classList)

     if(e.target.classList.contains('agregar-carrito')){
          console.log('okay');
     }
}