let cofla = Number(prompt("Cuanto dinero tiene Cofla?"));
let dinero1, dinero2, dinero3;

if(cofla >= 0.6 && cofla < 1){
    alert("Comprate el helado de agua cofla pelotudo");
    alert("Tu vuelto es de "+ (cofla - 0.6));
    cofla=cofla-0.6;
}else if(cofla >=1 && cofla < 1.6){
    alert("Puedes comprar un helado de crema de burro cofla");
    alert("Tu vuelto es de "+ (cofla - 1));
    cofla=cofla-1;
}else if(cofla >=1.6 && cofla<1.7){
    alert("Puedes comprar un helado marca Heladix cofla");
    alert("Tu vuelto es de "+ (cofla - 1.6));
    cofla=cofla-1.6;
}else if(cofla === 1.7 && cofla < 1.8){
    alert("Te alcanza para el helado marca heladovich cofla");
    alert("Tu vuelto es de "+ (cofla - 1.7));
    cofla=cofla-1.7;
}else if(cofla >=1.8 && cofla <2.9){
    alert("Puedes comparte un herlardo cofla");
    alert("Tu vuelto es de "+ (cofla - 1.8));
    cofla=cofla-1.8;
}else if(cofla >=2.9 ){
    alert("Helado con confites o pote 1/4KG, cualquiera cofla");
    alert("Tu vuelto es de "+ (cofla - 2.9));
    cofla=cofla-2.9;
}else{
    alert("No te alcanza para ni pingo pinche pobre labur4 p3nd3j3t3");
}


let maria = Number(prompt("Cuanto dinero tiene María?"));

if(maria >= 0.6 && maria < 1){
    alert("Comprate el helado de agua por bot");
    alert("Tu vuelto es de "+ (maria - 0.6));
    maria=maria-0.6;
}else if(maria >=1 && maria < 1.6){
    alert("Puedes comprar un helado de crema");
}else if(maria >=1.6 && maria<1.7){
    alert("Puedes comprar un helado marca Heladix Mivida");
    alert("tu vuelto es de "+(maria-1.6));
}else if(maria === 1.7 && maria < 1.8){
    alert("Te alcanza para el helado marca heladovich amor");
    alert("tu vuelto es de "+(maria-1.7));
}else if(maria >=1.8 && maria <2.9){
    alert("Puedes comparte un herlardo galardo amorsh");
    alert("tu vuelto es de "+(maria-1.8));
}else if(maria >=2.9 ){
    alert("Helado con confites o pote 1/4KG, cualquiera miamor");
    alert("tu vuelto es de "+(maria-2.9));
}else{
    alert("No te alcanza para ni pingo pinche pobre");
}


let andres = prompt ("Cuanto dinero tiene Andrés?");

if(andres >= 0.6 && andres < 1){
    alert("Comprate el helado de agua por bot");
    alert("Tu vuelto es de "+ (andres - 0.6));
    andres=andres-0.6;
}else if(andres >=1 && andres < 1.6){
    alert("Puedes comprar un helado de crema");
    alert("Tu vuelto es de "+ (andres - 1));
    andres=andres-1;
}else if(andres >=1.6 && andres<1.7){
    alert("Puedes comprar un helado marca Heladix Mivida");
    alert("Tu vuelto es de "+ (andres - 1.6));
    andres=andres-1.6;
}else if(andres === 1.7 && andres < 1.8){
    alert("Te alcanza para el helado marca heladovich amor");
    alert("Tu vuelto es de "+ (andres - 1.7));
    andres=andres-1.7;
}else if(andres >=1.8 && andres <2.9){
    alert("Puedes comparte un herlardo galardo amorsh");
    alert("Tu vuelto es de "+ (andres - 1.8));
    andres=andres-1.8;
}else if(andres >=2.9 ){
    alert("Helado con confites o pote 1/4KG, cualquiera miamor");
    alert("Tu vuelto es de "+ (andres - 2.9));
    andres=andres-2.9;
}else{
    alert("No te alcanza para ni pingo pinche pobre");
}

let vuelto = cofla + maria + andres;

document.getElementById("dCofla").innerHTML=`Cofla tiene S/.${cofla} nuevos solsitos`;
document.getElementById("dMaria").innerHTML=`María tiene S/.${maria} nuevos soles`;
document.getElementById("dAndres").innerHTML=`Andrés Tiene S/.${andres} soles`;

document.getElementById("vuelto").innerHTML=`El vuelto total es de S/.${vuelto} nuevos soles`;
//si declaraste algo como numero es para que cuando uses exactamente igual ya que el promt te devuelve cadena
let resultado;

//1:53.36