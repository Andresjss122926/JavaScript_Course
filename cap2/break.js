let num = 0;
let result='';

while (num < 100) {
    num++;
    result += num;
    if (num==10) {
        break; 
        //brake se encarga de romper el ciclo
    }
    
}result+="<br>" + "fin";

document.getElementById("contenido").innerHTML=result;
