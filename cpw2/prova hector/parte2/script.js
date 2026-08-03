function validar() {
  event.preventDefault()
  let nome = document.getElementById('nome').value
  let sobrenome = document.getElementById('sobrenome').value
  let cpf = document.getElementById('cpf').value
  let telefone = document.getElementById('telefone').value
  let endereco = document.getElementById('endereco').value
  let idade = document.getElementById('idade').value
  let email = document.getElementById('email').value

  nome = `${nome.charAt(0).toUpperCase()}${nome.slice(1).toLowerCase()}`
  sobrenome = `${sobrenome.charAt(0).toUpperCase()}${sobrenome.slice(1).toLowerCase()}`

  if(cpf.length != 11) {
    return alert('CPF deve conter 11 digitos!')
  }
  cpf = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9)}`

  if(telefone.length != 11) {
    return alert('Telefone deve conter 11 digitos!')
  }
  telefone = `(${telefone.slice(0,2)})${telefone.slice(2,7)}-${telefone.slice(7)}`

  let existArro = email.includes('@')
  if(existArro != true) {
    return alert('Email deve conter arroba')
  }

  return document.getElementById('perfil').innerHTML=`
    Bem Vindo ${nome} ${sobrenome}.<br>
    Telefone: ${telefone}.<br>
    Email: ${email}.<br>
    Endereço: ${endereco}.<br>
    Idade: ${idade} anos.<br>
    CPF: ${cpf}.
  `
}