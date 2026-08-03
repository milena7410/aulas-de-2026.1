function mostrarDados() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value

    document.getElementById("mostrar").innerHTML = `oiiiii   ${nome} <br> ${sobrenome}`; 
}