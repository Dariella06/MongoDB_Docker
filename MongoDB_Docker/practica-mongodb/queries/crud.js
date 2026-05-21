db = db.getSiblingDB('botiga');

let resultat = db.productes.insertOne({
        _id: 20,
        nom: "Llibre",
        preu: 14.99,
        categoria: "llectura",
        estoc: 15,
        valoracio: 4.1,
        actiu: true,
        etiquetes: ["educació", "llectura", "cultural"],
        creat_el: new Date()
    })
print("Documentos insertado uno: " + resultat.insertedId)


// Insertar 3 productos con la categoria "ofertes"
let resultat2 = db.productes.insertMany([
    {
        _id: 12,
        nom: "Vestit",
        preu: 79.99,
        categoria: "ofertes",
        estoc: 10,
        valoracio: 4.0,
        actiu: true,
        etiquetes: ["oferta", "descompte", "temporada"],
        creat_el: new Date()
    },
    {
        _id: 13,
        nom: "Motxila",
        preu: 59.99,
        categoria: "ofertes",
        estoc: 10,
        valoracio: 4.8,
        actiu: true,
        etiquetes: ["oferta", "descompte", "escola"],
        creat_el: new Date()
    },
    {
        _id: 14,
        nom: "Sombrilla",
        preu: 59.99,
        categoria: "ofertes",
        estoc: 10,
        valoracio: 4.8,
        actiu: true,
        etiquetes: ["oferta", "descompte", "escola"],
        creat_el: new Date()
    }
])

// Listar todos los productos
let listarTodo = db.productes.find
