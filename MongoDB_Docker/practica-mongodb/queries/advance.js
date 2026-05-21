db = db.getSiblingDB('botiga')

// Utilitza $and per cercar productes actius amb preu entre 20 € i 100 €
let con1 = db.productes.find({$and: [{preu: {$gt: 20, $lt: 100}}, {actius: true}]})
print("Busca productos activos con precio entre 20 y 100")
printjson(con1)

// Utilitza $or per cercar productes de categoria 'electrònica' o valoració >= 4.5
let con2 = db.productes.find({$or: [{categoria: 'electrònica'}, {valoracio: {$gte: 4.5}}]})
print("Buscar producto por categoria electronica o valoracion mayor o igual a 4.5")
printjson(con2.toArray())

// Utilitza $regex per cercar productes el nom dels quals contingui una paraula clau
let con3 = db.productes.find({nom: {$regex: "aur", $options: "i"}})
print("Buscar productos por nombre de las cuales contenga una palabra clave")
printjson(con3.toArray())

// Ordena els productes per preu descendent i limita el resultat a 5 (sort + limit)
let con4 = db.productes.find().sort({preu: -1}).limit(5)
print("Ordena los productos por precio descendiente y limite de 5: ")
printjson(con4.toArray())

// Compta quants productes hi ha per categoria ($group de l'agregació)
let con5 = db.productes.aggregate([{$group: {_id: "$categoria", total: {$sum: 1}}}])
print("Cuantos productos hay por categoria: ")
printjson(con5.toArray())

// Calcula el preu mitjà per categoria amb $group i $avg
let con6 = db.productes.aggregate([{$group: {_id: "$categoria", preu_mitja: {$avg: "$preu"}}}])
print("Calcular el precio medio por categoria")
printjson(con6.toArray())

// Calcula el total de consum per client (quan s’ha gastat cada client).
let con7 = db.comandes.aggregate([{$group: {_id: "$client_id", total_gastat: {$sum: "$productes"}}}])
print("Calcular el total de consumo de los clientes")
printjson(con7.toArray())

// Crea un índex simple al camp categoria
let ind1 = db.productes.createIndex({ categoria: 1 })
print("Índex simple creat: " + ind1)

// Crea un índex compost per (categoria, preu)
let ind2 = db.productes.createIndex({ categoria: 1, preu: -1 })
print("Índex compost creat: " + ind2)

// Crea un índex de text al camp nom per permetre cerques full-text
let ind3 = db.productes.createIndex({ nom: "text" })
print("Índex de text creat: " + ind3)

// Elimino el indice
let del = db.productes.dropIndex("categoria_1")
print("Índex eliminat: " + del)

// SIN ÍNDICE
print("SIN ÍNDICE")
let sinIndice = db.productes.find({ categoria: "ofertes" }).explain("executionStats")
printjson(sinIndice)

// Creamos de nuevo el índice
let ind4 = db.productes.createIndex({ categoria: 1 })
print("Índex recreat: " + ind4)

// CON ÍNDICE
print("CON ÍNDICE")
let conIndice = db.productes.find({ categoria: "ofertes" }).explain("executionStats")
printjson(conIndice)

// Llista tots els índexs de la col·lecció amb getIndexes()
print("Todos los índices:")
let listIn = db.productes.getIndexes()
printjson(listIn)
