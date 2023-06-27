var formulario = document.getElementById('idDeFormulario')

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
var nombre = document.getElementById('name').value;
const edad = document.getElementById('age').value;
const nacionalidad = document.getElementById('nationality').value;

  if (nombre.length == 0) { //Se quita la similitud extrema
    errorNombre(); //Se construye una funcion que nos valide el if
  }
  if (edad < 18 || edad > 120) {
      errorEdad();
  }
    function errorNombre() { 
      const nombre = document.getElementById('name');
      nombre.classList.add('error');//Nos manda un mesaje de error si dejamos el nombre vacio
      alert('Ingresa tu nombre o hay tabla');
    }
    function errorEdad() { 
      const edad = document.getElementById('age');
      edad.classList.add("error")//Nos manda un mesaje de error si dejamos el nombre vacio
      alert('Error con tu edad, esta es una fiesta de grandes ;p, pero no demasiado grandes xd');
    }

  if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  // console.log("qp2 si agarro");
    agregarInvitado(nombre, edad, nacionalidad)
    }
  }); //cierre de validaciones


  // const botonBorrar = document.createElement("button");
  // botonBorrar.textContent = "Eliminar invitado";
  // botonBorrar.id = "boton-borrar";

  // const corteLinea = document.createElement("br");
  // document.body.appendChild(corteLinea);
  // document.body.appendChild(botonBorrar);

//! si hace lo que tiene que hacer pero no se para que

  function agregarInvitado(nombre, edad, nacionalidad) {
 
    //! los if son inecesarios por que podemos cambirlos desde el html
    if (nacionalidad === "ar") {
      nacionalidad = "Argentina"
    }
    else if (nacionalidad === "mx") {
      nacionalidad = "Mexicana"
    }
    else if (nacionalidad === "vnzl") {
      nacionalidad = "Venezolana"
    }
    else if (nacionalidad === "per") {
      nacionalidad = "Peruana"
     }


  var lista = document.querySelector("h3")
  var elementoLista = document.createElement("div")
   
   elementoLista.classList.add("elemento-lista")// Elimine el ed
     lista.appendChild(elementoLista);

   var spanNombre = document.createElement("span")
   var inputNombre = document.createElement("input")
   var espacio = document.createElement("br")
      inputNombre.value = nombre; 
 
//console.log(spanNombre.textContent);
     elementoLista.appendChild(spanNombre)
     elementoLista.appendChild(inputNombre)
     elementoLista.appendChild(espacio)

     spanNombre.textContent = "Nombre del pinche invitado: " //Se agrega datos extras :D

  function crearElemento(descripcion, valor) {
  
   var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
   var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
   inputNombre.value = valor 
   elementoLista.appendChild(spanNombre)
   elementoLista.appendChild(inputNombre)
   elementoLista.appendChild(espacio)
   }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

//! parece que todo bien con este boton 
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea);
   elementoLista.appendChild(botonBorrar);

   botonBorrar.onclick = function() {
   this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
  
    
}
  }
// });