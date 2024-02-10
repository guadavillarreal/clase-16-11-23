//1RA forma de trabajar enviando el obj desde html
//declaro una funcion siempre arriba
//func en forma de flecha
const cambiarTitulo = () => {
  //siempre verfico que lafuncion este bien, arranque, puedo realizar un console.log
  //console.log('desde la funcion cambirTitulo');
  /*
    para buscar por etiqueta con getElementById- devuelve un solo obj
    const titulaPrincipal = document.getElementById('id')
    para buscar por etiqueta - devuelve un array de obj que coincidan
    const titulaPrincipal = document.getElementByTagName('p')
    para buscar por clases - devuelve un array de obj que coincidan 
    const titulaPrincipal = document.getElementByClassName('btn')
    una conbinacion de los3-se busca x id, class o etiqueta solo que se escribe el selector de etiqueta como lo haria en la hoja de estilo
    const titulaPrincipal = document.querySlector('#id') ->busca x ID
    const titulaPrincipal = document.querySlector('.btn') ->busca por clase
    devuelve un elemento, el primero que encuentra
    const titulaPrincipal = document.querySlector('h1') ->busca por etiqueta, tal y cual como se la toma en la hoja de css
    const titulaPrincipal = document.querySlectorAll('.btn') ->busca por clase y devuelve todos los elementos que encuentra
    */
  const tituloPrincipal = document.querySelector("h1");
  //para verificar que este bien el comando y que tenga retorno
  //console.log(tituloPrincipal);
  //para modificar un obj puedo utilizar el siguiente metodo- pero no interpreta las etiquetas de HTML
  console.log(tituloPrincipal);
  // tituloPrincipal.innerText = 'nuevo titulo';
  //p modificar y que interprete las etiquetas en lo que retorna puedo utilizar
  tituloPrincipal.innerHTML = "Titulo generado desde <b> JS </b>";
  //para modificar el estilo hay varias opc pero uno de ellas y la mas usada es className puedo incluso usar una clase propia creada en la hoja de estilo
  tituloPrincipal.className = "display-1 text-info";
};
//2dA forma de trabajar pidiendo el obj desde la hoja de JS
//----comento la 1ra opc
//func en forma de flecha
// const verMas = () => {
//   /*para probar que funciona la llamada a la funcion desde el btn
//   console.log("Desde la funcion verMas");*/
//   /*creo un prafo nuevo
//   -agrego el prafo en el html*/
//   //agrego el prafo en el html
//   //quiero buscar el nodo padre para el nuevo parrafo
//   //getElementsByClassName busca por nombre de clase- getElementsByTagName busca por nombre de etiqueta
//   const seccionDatos = document.getElementsByClassName("mt-5");
//   //----------------------OPCION 1----------------------------
//   //creo una condicional para controlar la accion y estetica del boton
//   //.innerText obtengo el contenido de txt del btn para compararlo
//   if (btnVerMas.innerText === 'Ver mas...') {
//     //creo un prafo nuevo
//     //creo una const donde voy a guardar el parrafo nuevo
//     //createElement crea etiquetas del html, 'p' la etiqueta que creo en este ej
//     const parrafoNuevo = document.createElement("p");
//     parrafoNuevo.innerHTML = `Tambien puede añadir oyentes de eventos para responder a interacciones del usuario,
//       como clics o pulsaciones de teclas. Es crucial tener en cuenta el rendimiento al manipular el DOM, ya que
//       operaciones frecuentes pueden impactar en el rendimiento de la página. En resumen, el DOM proporciona una
//       interfaz poderosa para manipular la estructura y el contenido de la página web, lo que permite crear
//       interacciones dinámicas y experiencias personalizadas para los usuarios.`;
//     //agrega una clase de bootstrap , lead resalta
//     parrafoNuevo.className = "lead";
//     //muestra por consola la var creada cuando presiono el btnVerMas
//     console.log(parrafoNuevo);
//     //console.log(seccionDatos); // muestra el array que encontre con el parametro buscado
//     //selecciona el elemento que quiero desde el array
//     console.log(seccionDatos[0]);
//     //para agregar un nuevo nodo hijo al final
//     //seccionDatos[0].appendChild(parrafoNuevo);
//     //para agregar un nuevo nodo hijo al inicio-principio osea despues del padre sera el primer hijo
//     //seccionDatos[0].prepend(parrafoNuevo);
//     //para agregar un nuevo nodo hijo en el medio-me pide que ingrese lo que deseo ingresar y antes de quien
//     seccionDatos[0].insertBefore(parrafoNuevo, btnVerMas);
//     /*al precionar una vez el btn deberia de cambiar y dejar de generar mas txt
//     para lo cual con innerHTML cambio el txt del btn
//     con className cambio el estilo del btn con una clase de bootstrap */
//     btnVerMas.innerHTML = 'Ocultar';
//     btnVerMas.className = 'btn btn-danger';
//   } else {
//     //genero un console.log para ver que funcione el else de la estructura
//     console.log('aqui deberia borrar el parrafo');
//     //muestro el elemento que deseo borrar para verificar que estoy seleccionando el correct
//     console.log(seccionDatos[0].children[2]);
//     //elimino el hijo al precionar el btn ocultar con el metodo removeChild
//     seccionDatos[0].removeChild(seccionDatos[0].children[2]);
//     //SIEMPRE verificar que los cambio sean los correctos asi no cree errores comofuncionar una sola vez, verificar txt para no tener errores con la estructura if xej
//     //cambio el txt del btn
//     btnVerMas.innerText = 'Ver mas...';
//     //cambio el estilo para que quede esteticamente como el del inico
//     btnVerMas.className = 'btn btn-outline-info';
//   }
// };

//trabajo trayendo un obj desde la hoja de JS
//Opcion 1 funciona correctamente 

/*2da Opcion -utiluzo inerHTML pero no me permite controlar tan detalladamente */
const seccionDatos = document.getElementsByClassName("mt-5");
const verMas = () => {
  if (btnVerMas.innerText === "Ver mas...") {
    seccionDatos[0].innerHTML += `<p>Tambien puede añadir oyentes de eventos para responder a interacciones del usuario,
        como clics o pulsaciones de teclas. Es crucial tener en cuenta el rendimiento al manipular el DOM, ya que 
        operaciones frecuentes pueden impactar en el rendimiento de la página. En resumen, el DOM proporciona una
        interfaz poderosa para manipular la estructura y el contenido de la página web, lo que permite crear
        interacciones dinámicas y experiencias personalizadas para los usuarios.</p>`;

    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-danger";
  } else {
    //genero un console.log para ver que funcione el else de la estructura
    console.log("aqui deberia borrar el parrafo");
    //muestro el elemento que deseo borrar para verificar que estoy seleccionando el correct
    console.log(seccionDatos[0].children[2]);
    //elimino el hijo al precionar el btn ocultar con el metodo removeChild
    seccionDatos[0].removeChild(seccionDatos[0].children[2]);
    //SIEMPRE verificar que los cambio sean los correctos asi no cree errores comofuncionar una sola vez, verificar txt para no tener errores con la estructura if xej
    //cambio el txt del btn
    btnVerMas.innerText = "Ver mas...";
    //cambio el estilo para que quede esteticamente como el del inico
    btnVerMas.className = "btn btn-outline-info";
  }
};
const btnVerMas = document.getElementById("btnVerMas");

//si quiero agregar un evento por el elemento que elijo, debo de agregar un manejador de eventos
//en addEventListener el primer parametro que ingreso tiene que ser el nombre del evento que quiero-click- y el segundo nomb de la funcion-verMas-('click',verMas)
//pero si la func no tiene parametros va sin (), en caso de que si tenga se colocan los param dentro de los ()
btnVerMas.addEventListener("click", verMas); //sin la palabra on, la cual solo va desde el html
