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
print("Varios documentos insertados:")
printjson(resultat2.insertedIds)

// ----------------- FIND ---------------
// Listar todos los productos de la colección
let find1 = db.productes.find()
print("Encontrar todos los productos:")
printjson(find1.toArray())


// Buscar todos los productos inferior a 50 euros
let find2 = db.productes.find({ preu: { $lt: 50 } })
print("Encontrar todos los productos inferiores a 50:")
printjson(find2.toArray())


// Buscar productos con categoría específica y stock mayor a 0
let find3 = db.productes.find({ categoria: "ofertes", estoc: { $gt: 0 } })
print("Productos de ofertes con stock > 0:")
printjson(find3.toArray())


// Buscar productos con valoración >= 4.0
let find4 = db.productes.find({ valoracio: { $gte: 4.0 } },{ nom: 1, preu: 1, valoracio: 1, _id: 0 })
print("Productos con valoración >= 4.0:")
printjson(find4.toArray())


// Buscar productos por etiqueta
let find5 = db.productes.find({ etiquetes: "tecnologia" })
print("Productos con etiqueta 'tecnologia':")
printjson(find5.toArray())


// ----------------- UPDATE ---------------
// Actualiza el precio del producto especifico.
let actu1 = db.productes.updateOne({nom: "Guitarra"}, {$set: {preu: 20.99}})
print("Actualizar el precio del productos especifico: " + actu1.modifiedCount)


// Actualizar el estoc de todos los productos de una categoria en 10 unidades.
let actu2 = db.productes.updateMany({categoria: "ofertes"}, {$inc: {estoc: 10}})
print("Actualizar el estoc de todos los productos de una categoria: " + actu2.modifiedCount)


// Agregar una nueva etiqueta a un producto.
let actu3 = db.productes.updateOne({nom: "Vestit"}, {$addToSet: {etiquetes: "moda"}})
print("Actualizar una nueva etiqueta a un producto: " + actu3.modifiedCount)


// Desactivar actiu:false en todos los productos sin estoc.
let actu4 = db.productes.updateMany({estoc: 0}, {$set: {actiu: false}})
print("Actualizar 'actiu:false' en todos los productos sin estoc: " + actu4.modifiedCount)


// ----------------- ELIMINAR ---------------
// Eliminar un producto por su nombre.
let del1 = db.productes.deleteOne({nom: "Motxilla"})
print("Eliminar un producto por su nombre: " + del1.deletedCount)


// Eliminar todos los productos de una categoria ofertes.
let del2 = db.productes.deleteMany({categoria: "ofertes"})
print("Eliminar Todos los productos por su categoria ofertes: " + del2.deletedCount)

