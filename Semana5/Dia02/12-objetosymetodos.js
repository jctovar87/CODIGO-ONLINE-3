let albumMusica ={
    nombre: "Futura Nostalgia",
    artista: "Dua Lipa",
    discografica: "Warner Records",
    anio: 2020,
    canciones:[
        {
            titulo: "Future Nostalgia",
            duracion: 3.04,
            escritores: ["Dua Lipa", "Calrence", "Jeff"]
        },
        {
            titulo: "Dont t Start Now",
            duracion: 3.13
        },
        {
            titulo: "Physical",
            duracion: 3.13
        }
    ]

}

console.log(albumMusica.canciones[2].titulo)
console.log(albumMusica.canciones[0].escritores[0])