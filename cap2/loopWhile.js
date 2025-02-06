// el while es como un if que se repite 
//Todavia se sigue cumpliendo?
let i=0;
/*while (i<10){
    i++;
    document.write(i);
}*/

//dado que write ya no se usa
let resultado= ''; //cadena vacia

/*while (i<10){
    i++;
    resultado+=i+"<br>";
}*/
//El while pregunta luego ejecuta, el do while es ejecuta una vez luego pregunta;

do{
    document.getElementById("contenido").innerHTML=i;
    i++;
}while (resultado>6);

//document.getElementById("contenido").innerHTML=i;
//break rompe el bucle


