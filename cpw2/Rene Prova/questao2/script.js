const validando = () => {
    let nome = document.getElementById("Nome").value
    let sobrenome = document.getElementById("Sobrenome").value
    let cpf = document.getElementById("CPF").value
    let fone = document.getElementById("Telefone").value
    let ende = document.getElementById("Endereço").value
    let idade = document.getElementById("Idade").value
    let email = document.getElementById("Email").value

    let nome1 = nome.charAt(0).toUpperCase() + nome.slice(1)
    let sobrenome2 = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1)
    let grande = nome1 + " " + sobrenome2

    let cpf1 = cpf.slice(0, 3)
    let cpf2 = cpf.slice(3, 6)
    let cpf3 = cpf.slice(6, 9)
    let cpf4 = cpf.slice(9, 11)
    let cpfformatado = cpf1 + "." + cpf2 + "." + cpf3 + "-" + cpf4

    let fone1 = fone.slice(0, 2)
    let fone2 = fone.slice(2, 7)
    let fone3 = fone.slice(7, 11)
    let foneformatado = "(" + fone1 + ")" + fone2 + "-" + fone3
    let validandoemail = email.includes('@') 

    if (validandoemail != true ) {
        return alert("Digite um email valido!")
    }








    let exibidor = document.getElementById("Exibidor").innerHTML = `Esse é o meu nome:${grande}<br> CPF:${cpfformatado} Telefone:${foneformatado} Endereço${ende} idade ${idade} email${validandoemail} `
}