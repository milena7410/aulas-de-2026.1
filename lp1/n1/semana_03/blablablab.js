let n1 = 33
let n2 = 44
let n3 = 55

if (n1 == n2 || n2 == n3){
    console.log("iguais");
    
}else if(n1 > n2 && n1 > n3){
    console.log("o maior numero é ", n1);
}else if(n2 > n1 && n2 > n3){
    console.log("o maior numero é ", n2);
}else if(n3 > n1 && n3 > n1){
    console.log("o maior numero é ", n3);
}