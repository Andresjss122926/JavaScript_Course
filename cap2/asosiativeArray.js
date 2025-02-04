let fruta = {
    nombre: "fresa",
    peso: "16",
    sabor: "Dulce",
    color: "Rojo",
}

let nombre =fruta["nombre"];
let peso = fruta ["peso"];
let sabor = fruta["sabor"];
let color = fruta ["color"];

let mostrar = `El nombre de la fruta es ${nombre} <br>,
 su peso es <br> ${peso},
 su sabor es <br> ${sabor},
 su color es ${color} `

 document.getElementById("contenido").innerHTML=mostrar; document.getElementById("contenido").innerHTML=mostrar;