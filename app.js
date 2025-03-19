
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();  

    if (nombre === '') {
        alert('Por favor ingresa un nombre válido');
        return; 
    }

    amigos.push(nombre);

    document.getElementById('amigo').value = '';

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');  

    listaAmigos.innerHTML = '';

    let listaHtml = '';  

    for (let i = 0; i < amigos.length; i++) {
        listaHtml += `<li>${amigos[i]}</li>`;  
    }

    listaAmigos.innerHTML = listaHtml;
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe agregar al menos 2 amigos.');
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    let amigoSorteado = amigos[indiceAleatorio];  

    let resultadoElemento = document.getElementById('resultado'); 
    resultadoElemento.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}