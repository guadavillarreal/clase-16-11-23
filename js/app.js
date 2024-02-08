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
  console.log(tituloPrincipal);
  //para modificar un obj puedo utilizar el siguiente metodo- pero no interpreta las etiquetas de HTML
  console.log(tituloPrincipal);
  // tituloPrincipal.innerText = 'nuevo titulo';
  //p modificar y que interprete las etiquetas en lo que retorna puedo utilizar
  tituloPrincipal.innerHTML = "Titulo generado desde <b> JS </b>";
  //para modificar el estilo hay varias opc pero uno de ellas y la mas usada es className puedo incluso usar una clase propia creada en la hoja de estilo
  tituloPrincipal.className = 'display-1 text-info';
};
