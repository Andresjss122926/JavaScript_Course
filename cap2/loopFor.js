// Declarar - iniciar - iterar - Aumento o decremento
let num = 1;
//let i=0; esto debe ir dentro del for no seas nub
//let es regional, es una variable por bloques, puede haber 2 i uno fuera del loop y otro dentro
//perteneciente a su respectivo bloque
let result="";
for(let i = 20; i>=num; i--){
    result+=i+"<br>";
    document.getElementById("contenido").innerHTML=result;
}

//2:54:10