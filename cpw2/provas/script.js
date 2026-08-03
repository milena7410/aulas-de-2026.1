let nome = document.getElementById('nome').value;
let sobren = document.getElementById('sobrenome').value;
let cpf = document.getElementById('cpf').value;
let tel = document.getElementById('tel').value;
let end = document.getElementById('end').value;
let idade = document.getElementById('idade').value;
let email = document.getElementById('email').value;

nome = nome.toUpperCase(0) + nome.slice(1).toLowerCaser
sobren = sobren.toUpperCase(0) + sobren.slice(1).toLowerCaser

let cpfpt1 = cpf.slice(0, 3)
let cpfpt2 = cpf.slice(3, 6)
let cpfpt3 = cpf.slice(6, 9)
let cpfpt4 = cpf.slice(9)
let cpfFormatado = `${cpfpt1}.${cpfpt2}.${cpfpt3}-${cpfpt4}`

let fonept1 = tel.slice(0, 2)
let fonept2 = tel.slice(2, 7)
let fonept3 = tel.slice(7)
let foneFormatado = `(${fonept1})${fonept2}-${fonept3}`

if (email != email.includes('@')) return alert('insira um email valido!')

let texto = document.getElementById('p').innerHTML = `
    seu cpf é ${cpfFormatado} e seu numero de telefone é ${foneFormatado}
   `  
  alert(texto)