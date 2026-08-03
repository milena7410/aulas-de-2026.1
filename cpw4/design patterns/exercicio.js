// 1
// function cadastrarUsuario(usuario) {
//     console.log("Salvando no banco:", usuario);

//     console.log("Enviando email de boas-vindas para:", usuario.email);
// }
function salvarUsuario(usuario) {
    console.log("Salvando no banco:", usuario);
}

function enviarEmailBoasVindas(usuario) {
    console.log("Enviando email para:", usuario.email);
}

function cadastrarUsuario(usuario) {
    salvarUsuario(usuario);
    enviarEmailBoasVindas(usuario);
}
// 2
// function calcularDesconto(valor, tipo) {
//     if (tipo === "pix") {
//         return valor * 0.9;
//     } else if (tipo === "dinheiro") {
//         return valor * 0.95;
//     } else if (tipo === "cartao") {
//         return valor;
//     }
// }
const descontos = {
    pix: (valor) => valor * 0.9,
    dinheiro: (valor) => valor * 0.95,
    cartao: (valor) => valor
};

function calcularDesconto(valor, tipo) {
    return descontos[tipo](valor);
}
// 3
// function postarVideo() {
//     console.log("Novo vídeo!");

//     notificarJoao();
//     notificarMaria();
// }
let inscritos = [];

function inscrever(usuario) {
    inscritos.push(usuario);
}

function postarVideo() {
    console.log("Novo vídeo!");

    inscritos.forEach(usuario => {
        usuario.notificar();
    });
}
let joao = {
    nome: "João",
    notificar: function() {
        console.log(this.nome + " foi notificado!");
    }
};

let maria = {
    nome: "Maria",
    notificar: function() {
        console.log(this.nome + " foi notificada!");
    }
};
inscrever(joao);
inscrever(maria);
postarVideo();























