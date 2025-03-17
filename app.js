let amigos = [];

function mostrarMensajeAlerta(selector, mensaje) {
  let etiqueta = document.querySelector(selector);
  etiqueta.textContent = mensaje;
}

function limpiarCampoInput(inputNombre) {
  inputNombre.value = "";
}

function mostrarListaAmigos(arrayAmigos) {
  let listaAmigos = document.querySelector(".lista-amigos");

  listaAmigos.innerHTML = "";
  arrayAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function agregarAmigo(e) {
  e.preventDefault();

  const inputNombre = document.getElementById("nombre-input");
  const nombre = inputNombre.value;
 
  if (!nombre.trim()) {
    mostrarMensajeAlerta(".mensaje-error", "Porfavor inserte un nombre");
    return;
  }

  amigos.push(nombre);

  mostrarListaAmigos(amigos);

  mostrarMensajeAlerta(".mensaje-error", "");

  limpiarCampoInput(inputNombre);

  return amigos;
}

function mostrarAmigosSecreto(nombreAmigoSecreto) {
  let mensajeAmigo = document.querySelector(".amigo-secreto");
  mensajeAmigo.innerHTML = `Tu amigo secreto es: ${nombreAmigoSecreto}`;
  mensajeAmigo.style.display = "block";
}

function quitarAmigosSecreto() {
  let mensajeAmigo = document.querySelector(".amigo-secreto");
  mensajeAmigo.innerHTML = "";
  mensajeAmigo.style.display = "none";
}

function deshabilitarBotonSortear() {
  let botonSortear = document.querySelector(".btn-sortear");
  botonSortear.disabled = true;
}
function habilitarBotonSortear() {
  let botonSortear = document.querySelector(".btn-sortear");
  botonSortear.disabled = false;
}

function deshabilitarBotonAgregar() {
  let botonAgregar = document.querySelector(".btn-agregar-amigo");
  botonAgregar.disabled = true;
}
function habilitarBotonAgregar() {
  let botonAgregar = document.querySelector(".btn-agregar-amigo");
  botonAgregar.disabled = false;
}

function generarIndiceAleatorio(longitudArrayAmigos) {
  let numeroAleatorio = Math.floor(Math.random() * longitudArrayAmigos);
  return numeroAleatorio;
}

function generarSorteo() {
  let amigosASortear = amigos;
  if (amigosASortear.length < 3) {
    mostrarMensajeAlerta(
      ".mensaje-error",
      "Porfavor inserte al menos 3 amigos"
    );
  } else {
    /*OBTENER UN INDICE ALEATORIO PARA ENCONTRAR EL AMIGO SECRETO*/
    let indiceAmigoSorteado = generarIndiceAleatorio(amigosASortear.length);
    let amigoSorteado = amigosASortear[indiceAmigoSorteado];
    mostrarAmigosSecreto(amigoSorteado);
    deshabilitarBotonSortear();
    deshabilitarBotonAgregar();
  }
}

function reiniciarSorteo() {
  amigos = [];
  mostrarListaAmigos(amigos);
  mostrarMensajeAlerta(".mensaje-error", "");
  habilitarBotonSortear();
  quitarAmigosSecreto();
  habilitarBotonAgregar();
}