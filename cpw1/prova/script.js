function enviar(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

    document.getElementById("mostrar").innerHTML = `Oiii ${nome} ${sobrenome}<br>
    sua idade é ${idade} e seu email é ${email}`
}