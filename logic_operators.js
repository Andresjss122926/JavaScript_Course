// &&= operador logico AND "Y"
//||= operador logico OR "o" si cualquiera de las 2 es verdadera true
// !=not si algo no es verdadero
let num= 21;
let num2=21;
afirmacion1= num >num2;
afirmacion2= num == num2;

document.getElementById("contenido").innerHTML=(num == num2) && (num >= num2);
