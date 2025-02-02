let edad = Number(prompt("Cual es tu edad?"));
let boo;
if(edad >=18){
    boo = true;
    if(boo===true){
        alert("Eres mayor de edad");
    }
}else{
    alert("Eres menor de edad");
    boo = false;
    if(boo===false){
        alert("Eres menor de edad pillin");
    }
}