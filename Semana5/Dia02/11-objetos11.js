let perrete = {
    nombre:"Backus",
    edad: 12,
    color: "Blanco",
    esterilizado: false,
    ladra: true,
    hobbies: ["Jugar", "Persigue gatos", "Come higadito"],
    comer: function(){
        // Olfatea
        console.log("Come")
    }
}

console.log(perrete.nombre)
console.log(perrete.color)

console.log(perrete.hobbies[2])

perrete.edad=20
console.log(perrete.edad)
console.log(perrete.ladra)
if (perrete.ladra === true ){
        console.log("Si ladra")
    }else{
        console.log("No ladra")
    }


// if (anio % 400 === 0){
//     console.log("Si es año bisiesto")
// } else if(anio % 4 === 0 && anio % 100 != 0){
//     console.log("Si es BISIESTO")
// }else{
//     console.log("NO es BISISESTO")
//}