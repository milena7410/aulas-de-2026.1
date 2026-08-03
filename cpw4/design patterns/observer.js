
const inscritos = [];

function inscrever(usuario) {
    inscritos.push(usuario);
}

function novoVideo() {
    console.log("Novo vídeo postado!");
    inscritos.forEach(user => user.notificar());
}

// Observers
const joao = {
    notificar: () => console.log("João foi avisado")
};
const maria = {
    notificar: () => console.log("Maria foi avisada")
};

// Inscrevendo
inscrever(joao);
inscrever(maria);

// Evento
novoVideo();