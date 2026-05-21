// Crear la Base de Datos
db = db.getSiblingDB('botiga');

// --- PRODUCTOS
// Crear la Colección
    db.createCollection('productes');

    // Creamos como minimo 10 prouectos
    db.productes.insertMany([
    {
        _id: 1,
        nom: "Guitarra",
        preu: 29.99,
        categoria: "música",
        estoc: 6,
        valoracio: 3.6,
        actiu: true,
        etiquetes: ["música", "instrument", "cordes"],
        creat_el: new Date()
    },
    {
        _id: 2,
        nom: "Bicicleta",
        preu: 499.99,
        categoria: "esport",
        estoc: 3,
        valoracio: 4.2,
        actiu: true,
        etiquetes: ["transport", "aire lliure", "esport"],
        creat_el: new Date()
    },
    {
        _id: 3,
        nom: "Samarreta",
        preu: 19.99,
        categoria: "roba",
        estoc: 20,
        valoracio: 4.0,
        actiu: true,
        etiquetes: ["moda", "estiu", "cotó"],
        creat_el: new Date()
    },
    {
        _id: 4,
        nom: "Portàtil",
        preu: 899.99,
        categoria: "electrònica",
        estoc: 5,
        valoracio: 4.6,
        actiu: true,
        etiquetes: ["tecnologia", "ordinador", "treball"],
        creat_el: new Date()
    },
    {
        _id: 5,
        nom: "Sofà",
        preu: 799.99,
        categoria: "llar",
        estoc: 2,
        valoracio: 4.3,
        actiu: true,
        etiquetes: ["casa", "confort", "decoració"],
        creat_el: new Date()
    },
    {
        _id: 6,
        nom: "Rellotge",
        preu: 149.99,
        categoria: "accessoris",
        estoc: 10,
        valoracio: 4.1,
        actiu: true,
        etiquetes: ["moda", "temps", "lux"],
        creat_el: new Date()
    },
    {
        _id: 7,
        nom: "Càmera",
        preu: 599.99,
        categoria: "electrònica",
        estoc: 0,
        valoracio: 4.4,
        actiu: true,
        etiquetes: ["fotografia", "tecnologia", "viatges"],
        creat_el: new Date()
    },
    {
        _id: 8,
        nom: "Sabates",
        preu: 89.99,
        categoria: "roba",
        estoc: 15,
        valoracio: 3.9,
        actiu: true,
        etiquetes: ["moda", "calçat", "esport"],
        creat_el: new Date()
    },
    {
        _id: 9,
        nom: "Taula de menjador",
        preu: 499.99,
        categoria: "llar",
        estoc: 0,
        valoracio: 4.7,
        actiu: true,
        etiquetes: ["casa", "menjador", "decoració"],
        creat_el: new Date()
    },
    {
        _id: 10,
        nom: "Auriculars",
        preu: 129.99,
        categoria: "electrònica",
        estoc: 8,
        valoracio: 4.0,
        actiu: true,
        etiquetes: ["música", "tecnologia", "àudio"],
        creat_el: new Date()
    }
]);


    // Creamos la colección de clientes
    db.createCollection('clients');

    // Cremos como minimo 10 clientes
    db.clients.insertMany([
    {
        _id: 1,
        nom: "Joan",
        email: "joan@gmail.com",
        telefon: "672345678",
        adreca: {
            carrer: "Carrer Major",
            ciutat: "Barcelona",
            codi_postal: "08001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 2,
        nom: "Maria",
        email: "maria@gmail.com",
        telefon: "678923456",
        adreca: {
            carrer: "Carrer de la Pau",
            ciutat: "Madrid",
            codi_postal: "28001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 3,
        nom: "Pere",
        email: "pere@gmail.com",
        telefon: "632827364",
        adreca: {
            carrer: "Carrer del Sol",
            ciutat: "València",
            codi_postal: "46001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 4,
        nom: "Laura",
        email: "laura@gmail.com",
        telefon: "697837482",
        adreca: {
            carrer: "Carrer de les Flors",
            ciutat: "Sevilla",
            codi_postal: "41001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 5,
        nom: "Carlos",
        email: "carlos@gmail.com",
        telefon: "628374829",
        adreca: {
            carrer: "Carrer de la Llibertat",
            ciutat: "Bilbao",
            codi_postal: "48001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 6,
        nom: "Reyna",
        email: "reyna@gmail.com",
        telefon: "639482738",
        adreca: {
            carrer: "Carrer de la Felicitat",
            ciutat: "València",
            codi_postal: "46001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 7,
        nom: "Roser",
        email: "roser@gmail.com",
        telefon: "629485729",
        adreca: {
            carrer: "Carrer de la Llibertat",
            ciutat: "Bilbao",
            codi_postal: "48001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 8,
        nom: "Steve",
        email: "steve@gmail.com",
        telefon: "637895873",
        adreca: {
            carrer: "Carrer de la Llibertat",
            ciutat: "Bilbao",
            codi_postal: "48001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 9,
        nom: "Krystel",
        email: "krystel@gmail.com",
        telefon: "673948283",
        adreca: {
            carrer: "Carrer de la Llibertat",
            ciutat: "Bilbao",
            codi_postal: "48001"
        },
        data_registre: new Date(),
        actiu: true
    },
    {
        _id: 10,
        nom: "Camila",
        email: "camila@gmail.com",
        telefon: "672895873",
        adreca: {
            carrer: "Carrer de la Llibertat",
            ciutat: "Bilbao",
            codi_postal: "48001"
        },
        data_registre: new Date(),
        actiu: true
    }
    ]);

// Crear la colección de pedidos
db.createCollection('comandes');

// Creamos como minimo 10 pedidos
db.comandes.insertMany([
    {
        _id: 1,
        client_id: 1,
        productes: [
            { producte_id: 1, quantitat: 1 },
            { producte_id: 10, quantitat: 2 }
        ],
        total: 459.97,
        estat: "enviat",
        data: new Date()
    },
    {
        _id: 2,
        client_id: 2,
        productes: [
            { producte_id: 4, quantitat: 1 }
        ],
        total: 899.99,
        estat: "pendent",
        data: new Date()
    },
    {
        _id: 3,
        client_id: 3,
        productes: [
            { producte_id: 2, quantitat: 1 }
        ],
        total: 499.99,
        estat: "enviat",
        data: new Date()
    },
    {
        _id: 4,
        client_id: 4,
        productes: [
            { producte_id: 3, quantitat: 1 },
            { producte_id: 8, quantitat: 1 }
        ],
        total: 109.98,
        estat: "enviat",
        data: new Date()
    },
    {
        _id: 5,
        client_id: 5,
        productes: [
            { producte_id: 7, quantitat: 1 }
        ],
        total: 599.99,
        estat: "pendent",
        data: new Date()
    },
    {
        _id: 6,
        client_id: 6,
        productes: [
            { producte_id: 5, quantitat: 1 }
        ],
        total: 799.99,
        estat: "enviat",
        data: new Date()
    },
    {
        _id: 7,
        client_id: 7,
        productes: [
            { producte_id: 6, quantitat: 1 }
        ],
        total: 149.99,
        estat: "pendent",
        data: new Date()
    },
    {
        _id: 8,
        client_id: 8,
        productes: [
            { producte_id: 9, quantitat: 1 }
        ],
        total: 499.99,
        estat: "enviat",
        data: new Date()
    },
    {
        _id: 9,
        client_id: 9,
        productes: [
            { producte_id: 10, quantitat: 1 },
            { producte_id: 3, quantitat: 1 }
        ],
        total: 149.98,
        estat: "pendent",
        data: new Date()
    },
    {
        _id: 10,
        client_id: 10,
        productes: [
            { producte_id: 1, quantitat: 1 }
        ],
        total: 199.99,
        estat: "enviat",
        data: new Date()
    }
]);