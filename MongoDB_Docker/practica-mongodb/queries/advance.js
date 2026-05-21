db = db.getSiblingDB('botiga')

// Utilitza $and per cercar productes actius amb preu entre 20 € i 100 €
db.productes.find({$and: [{preu: {$gt: 20, $lt: 100}}, {actius: true}]})

// Utilitza $or per cercar productes de categoria 'electrònica' o valoració >= 4.5
db.productes.find({$or: [{categoria: 'electrònica'}, {valoracio: {$gte: 4.5}}]})

// Utilitza $regex per cercar productes el nom dels quals contingui una paraula clau
db.productes.find({nom: {$regex: "aur", $options: "i"}})

// Ordena els productes per preu descendent i limita el resultat a 5 (sort + limit)
db.productes.find().sort({preu: -1}).limit(5)

// Compta quants productes hi ha per categoria ($group de l'agregació)
db.productes.aggregate([{$group: {_id: "$categoria", total: {$sum: 1}}}])

// Calcula el preu mitjà per categoria amb $group i $avg
db.productes.aggregate([{$group: {_id: "$categoria", preu_mitja: {$avg: "$preu"}}}])

// Calcula el total de consum per client (quan s’ha gastat cada client).
db.comandes.aggregate([{$group: {_id: "$client_id", total_gastat: {$sum: "$productes"}}}])

// Crea un índex simple al camp categoria
db.productes.createIndex({categoria: 1})

// Crea un índex compost al camp categoria i preu
db.productes.createIndex({categoria: 1, preu: -1})