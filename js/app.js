const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

eventListeners();
function eventListeners(){
     listaCursos.addEventListener('click', agregarCurso);
}


function agregarCurso(e){
     e.preventDefault();

     if(e.target.classList.contains('agregar-carrito')){
          console.log('Hola');
     }
     console.log(e.target.classList);
}