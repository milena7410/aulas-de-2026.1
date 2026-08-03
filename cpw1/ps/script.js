function enviar(){
    let nome_pessoa = document.getElementById("nome").value
    let sobrenome_pessoa = document.getElementById("sobrenome").value
    let idade = document.getElementById("idade").value

    document.getElementById("mostrar").innerHTML = 
    `oiiii ${nome_pessoa} ${sobrenome_pessoa} voce tem ${idade}`

    
}