let cofla = Number(prompt("Cuanto dinero tiene Cofla?"));

if(cofla >= 0.6 && cofla < 1){
    alert("Comprate el helado de agua cofla pelotudo");
}else if(cofla >=1 && cofla < 1.6){
    alert("Puedes comprar un helado de crema de burro cofla");
}else if(cofla >=1.6 && cofla<1.7){
    alert("Puedes comprar un helado marca Heladix cofla");
}else if(cofla === 1.7 && cofla < 1.8){
    alert("Te alcanza para el helado marca heladovich cofla");
}else if(cofla >=1.8 && cofla <2.9){
    alert("Puedes comparte un herlardo cofla");
}else if(cofla >=2.9 ){
    alert("Helado con confites o pote 1/4KG, cualquiera cofla");
}else{
    alert("No te alcanza para ni pingo pinche pobre labur4 p3nd3j3t3");
}


let maria = Number(prompt("Cuanto dinero tiene María?"));

if(maria >= 0.6 && maria < 1){
    alert("Comprate el helado de agua por bot");
}else if(maria >=1 && maria < 1.6){
    alert("Puedes comprar un helado de crema");
}else if(maria >=1.6 && maria<1.7){
    alert("Puedes comprar un helado marca Heladix Mivida");
}else if(maria === 1.7 && maria < 1.8){
    alert("Te alcanza para el helado marca heladovich amor");
}else if(maria >=1.8 && maria <2.9){
    alert("Puedes comparte un herlardo galardo amorsh");
}else if(maria >=2.9 ){
    alert("Helado con confites o pote 1/4KG, cualquiera miamor");
}else{
    alert("No te alcanza para ni pingo pinche pobre");
}


let andres = prompt ("Cuanto dinero tiene Andrés?");

if(andres >= 0.6 && andres < 1){
    alert("Comprate el helado de agua por bot");
}else if(andres >=1 && andres < 1.6){
    alert("Puedes comprar un helado de crema");
}else if(andres >=1.6 && andres<1.7){
    alert("Puedes comprar un helado marca Heladix Mivida");
}else if(andres === 1.7 && andres < 1.8){
    alert("Te alcanza para el helado marca heladovich amor");
}else if(andres >=1.8 && andres <2.9){
    alert("Puedes comparte un herlardo galardo amorsh");
}else if(andres >=2.9 ){
    alert("Helado con confites o pote 1/4KG, cualquiera miamor");
}else{
    alert("No te alcanza para ni pingo pinche pobre");
}

document.getElementById("dCofla").innerHTML=`Cofla tiene S/.${cofla} nuevos solsitos`;
document.getElementById("dMaria").innerHTML=`María tiene S/.${maria} nuevos soles`;
document.getElementById("dAndres").innerHTML=`Andrés Tiene S/.${andres} soles`;

//si declaraste algo como numero es para que cuando uses exactamente igual ya que el promt te devuelve cadena
let resultado;

//1:53.36