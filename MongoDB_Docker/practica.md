# Preguntas
## Bloc 1
**1. Quina és la diferència entre docker run i docker compose up?<br>**
La diferencia entre los dos es que docker run crea el servicio, por ejemplo de MongoDB, manualmente y lo ejecuta. Puedes indicarle diferentes opciones como **-p** para el puerto o **-d** para segundo plano. Comparándolo con docker compose, utilizas un archivo llamado docker-compose.yml, en el cual puedes poner múltiples servicios como el MongoDB y el Mongo Express, para poder ejecutarlo y levantar esos dos servicios automáticamente con un solo comando.

En resumen, docker run es más simple para levantar un solo servicio (se pueden varios, pero es más complejo) y poder ejecutarlo, comparado con docker compose, que puede levantar varios servicios automáticamente y ejecutandolo con un solo comando.


**2. Per a què serveix la instrucció depends_on?<br>**
La instruccion depends_on indica que se debe iniciar cuando el otro contenedor haya arrancado. Por ejemplo, si Mongo Express depende de MongoDB, Mongo Express no se iniciará hasta que MongoDB haya arrancado.

**Garanteix que el servei dependent estigui completament operatiu<br>**
No, no lo garantiza. Mientras el servicio esté arrancado, el otro contenedor puede iniciarse, aunque no este completamente listo.

**3. Explica quina és la diferència entre una xarxa bridge per defecte i una xarxa personalitzada (amb nom) a Docker Compose.<br>**
La diferencia entre los dos es que bridge es una red automática que, para comunicarse, utiliza IP y tiene menos control sobre las redes. Comparado con una red personalizada, esta puede comunicarse mediante los nombres de los contenedores y es más ordenada a la hora de gestionar las redes.

## Bloc 2
**1. Què passaria si no definíssim cap volum al docker-compose.yml? Fes la prova i documenta el resultat.**<br>
Lo que pasaria es que al reiniciar el mongodb, se borrarian esos datos de manera permanente y al no tener volumenes que tenian esos datos guardaos, se inicia sin datos.

**Prueba:**<br>
- Primero lo que hice fue poner en comentarios los volumentes:
<img src="../MongoDB_Docker/images/image_1.png" alt="Comentar los volumenes">


- Luego utilizamos este comando para eliminar los contenedores:
```
docker compose down
```
- Después utilizamos este comando para volver a crear los contenedores sin los volúmenes ya que los comentamos:
```
docker compose up -d
```
<img src="../MongoDB_Docker/images/image_2.png" alt="Comandos de eliminar contenedores">


- Comprobamos entrando a Mongo Express viendo si la Base de Datos de botiga esta o no.
    - En este caso no aparece, ya que los datos no se guardan en ningún lugar sin volúmenes y al reiniciar esos datos se pierden.
<img src="../MongoDB_Docker/images/image_3.png" alt="Comandos de eliminar contenedores">

**2. Explica la diferència entre un volum named (amb nom) i un bind mount (ruta del host). Quan convé usar cada un?**<br>
El volum named es un volumen que lo gestiona y lo crea automaticamente el Docker internamente, mientras que le bind mount crea el usuario una carpeta o agarra una existente vinculandolo al volemn de docker, docker ahi solo funciona de entrelazar esa carpeta y su volumen.
El named volume conviene usarlo cuando solo te importa que los datos persistan y no necesitas acceder a ellos directamente desde el host. El bind mount conviene cuando necesitas editar archivos desde tu máquina y que los cambios se reflejen al instante en el contenedor, como por ejemplo en desarrollo.

**3. Explica la diferència entre l’estratègia embedding i l’estratègia referència amb exemples. Cal que els exemples siguin diferents dels que s’exposen en aquest document.**<br>
La diferencia es que en la estrategia embedding se guardan todos los datos relacionados dentro del mismo documento, mientras que en la estrategia de referencia los datos se separan en diferentes documentos y se conectan mediante un identificador (ID).

- **Estrategia embedding**
{
  "nombre": "Ana",
  "direcciones": [
    { "ciudad": "Barcelona", "calle": "Carrer Major 10" }
  ]
}

- **Estrategia referencia**
```
{
  "_id": 1,
  "nombre": "Ana",
  "direccion_id": 101
}
```

```
{
  "id": 101,
  "ciudad": "Barcelona",
  "calle": "Carrer Gotic 20"
}
```

**4. Explica quina estratègia o estratègies has fet servir en la col·lecció comandes i per quin motiu.**<br>
la estrategia que utilice son las dos, ya que junte todo en un documento pero hice las relaciones de productos y clientes.
Las use para poder combinar todo el contenido teniendo en un solo documento para consultarlo de forma mas directa, pero también las relacione para saber a que cliente y que productos va dirigido.

## Bloc 3
**1. Tal com has creat la col·lecció de productes, el seu nom és únic? Justifica la resposta.**<br>
No, no es único ya que, si intentara ponerlo, no puedo hacerlo directamente en la colección. Tendría que ejecutar una operación aparte para indicar que es único, ya que el insert solo sirve para poner datos, en comparación con una operación donde sí se puede definir.


**2. Què significa el terme “projectar” en les consultes? Explica-ho amb un exemple diferent del d’aquest enunciat.**<br>
El termino projectar significa que solo mostrara los datos selecionados y lo demas lo ocultara.


**Ej:**
- Si yo tengo este producto.
```
{
  nom: "Llibre",
  preu: 14.99,
  categoria: "lectura",
  estoc: 10
}
```


- Ahora lo que hago es projectar solo el nomrbe y precio
```
db.productes.find({}, {nom: 1, preu: 1, _id: 0 })
```


- Entonces solo se mostraria lo que que selecione para visualizar.
```
{
  nom: "Llibre",
  preu: 14.99
}
```


**3. Llista totes les funcions i operadors que hagis utilitzat en les consultes, explica el seu significat i descriu un exemple d’ús diferent dels exemples d’aquest enunciat.**<br>

### Funciones
- getSiblingDB(): Puede acceder o cambiar a otra base de datos.
```
db.getSiblingDB("botiga")
```

- insertOne(): Inserta un único documento en una colección.
```
db.clients.insertOne({
    _id: 4,
    nom: "Reyna",
    email: "reyna@gmail.com",
    telefon: "672345678",
    adreca: {
        carrer: "Carrer Major",
        ciutat: "Barcelona",
        codi_postal: "08001"
    },
    data_registro: new Date()
});
```

- insertMany(): Inserta varios documentos en una sola operación.
```
db.clients.insertMany([
    {
        _id: 4,
        nom: "Reyna",
        email: "reyna@gmail.com",
        telefon: "672345678",
        adreca: {
            carrer: "Carrer Major",
            ciutat: "Barcelona",
            codi_postal: "08001"
        },
        data_registro: new Date()
    },
    {
        _id: 5,
        nom: "Marc",
        email: "marc@gmail.com",
        telefon: "699000111",
        adreca: {
            carrer: "Carrer Nou",
            ciutat: "Tarragona",
            codi_postal: "43001"
        },
        data_registro: new Date()
    }
]);
```

- find(): Busca documentos dentro de una colección.
```
db.clients.find({ "adreca.ciutat": "Barcelona" });
```

- updateOne(): Actualiza un único documento.
```
db.clients.updateOne(
    { _id: 4 },
    { $set: { telefon: "600111222" } }
);
```

- updateMany(): Actualiza varios documentos a la vez.
```
db.clients.updateMany(
    { "adreca.ciutat": "Barcelona" },
    { $set: { "adreca.ciutat": "BCN" } }
);
```

- deleteOne(): Elimina un único documento.
```
db.clients.deleteOne({ _id: 4 });
```

- deleteMany(): Elimina varios documentos según una condición.
```
db.clients.deleteMany({ "adreca.ciutat": "Barcelona" });
```

- print(): Muestra texto por consola.
```
print("Client: ");
printjson(find1.toArray())
```

- printjson(): Muestra documentos JSON de forma estructurada.
```
printjson(find1.toArray());
```

- toArray(): Convierte el resultado de una consulta en un array.
```
printjson(find1.toArray())

```

- new Date(): Genera una fecha y hora.
```
{
    nom: "Guitarra electrica", 
    preu: 20.45, 
    categoria: "electrònica",
    estoc: 10, 
    valoracio: 4.9, 
    actiu: true, 
    etiquetes: ["instrument", "cordes"],
    creat_el: new Date()
},
```

### Operadores
- $lt: Busca valores menores que otro valor.
```
db.clients.find({ _id: { $lt: 4 } });
```

- $gt: Busca valores mayores que otro valor.
```
db.clients.find({ _id: { $gt: 4 } });
```

- $gte: Busca valores mayores o iguales que otro valor.
```
db.clients.find({ _id: { $gte: 4 } });
```

- $set: Modifica el valor de un campo.
```
db.clients.updateOne(
    { _id: 4 },
    { $set: { email: "reyna.nou@gmail.com" } }
);
```

- $inc: Incrementa o decrementa un valor numérico.
```
db.clients.updateOne(
    { _id: 4 },
    { $inc: { _id: 1 } }
);
```

- $addToSet: Añade un valor a un array evitando duplicados.
```
db.clients.updateOne(
    { _id: 4 },
    { $addToSet: { etiquetes: "VIP" } }
);
```


## Bloc 4
**Documenta la diferència segons el valor nDocs Examined.**<br>
La diferencia entre los dos es que el índice hace que MongoDB no tenga que recorrer toda la colección, reduciendo el valor de nDocsExamined y mejorando el rendimiento de la consulta.


**1. Quan pot ser perjudicial tenir massa índexs en una col·lecció? Explica el compromís (trade-off) entre lectura i escriptura.**<br>
Puede ser perjudicial cuando empiece a afectar al rendimiento de la base de datos. Ayudan a mejorar la búsqueda, pero tener demasiados puede hacer que el rendimiento sea más lento.

Por ejemplo, al insertar, actualizar o eliminar un documento, el índice también debe actualizarse junto con los datos, y si hay demasiados índices, estas operaciones pueden volverse más lentas cuanto mayor sea el número de índices.

El compromiso **(trade-off)** entre lectura y escritura es que mejora los índices aumentando la velocidad de las consultas de lectura, pero empeora el rendimiento de las operaciones de escritura.

**2. Llista totes les funcions i operadors que hagis utilitzat en les consultes, explica el seu significat i descriu un exemple d’ús diferent dels exemples d’aquest enunciat.**<br>

### Funciones utilizadas
- find(): realizar consultas simples
```
db.clients.find({ "adreca.ciutat": "Barcelona" })
```

- sort(): ordenar resultados
```
db.clients.find().sort({ nom: 1 })
```

- limit(): limitar el número de resultados
```
db.clients.find().limit(3)
```

- aggregate(): realizar consultas avanzadas con agrupación
```
db.clients.aggregate([{ $group: { _id: "$adreca.ciutat" } }])
```

- createIndex(): crear índices
```
db.clients.createIndex({ nom: 1 })
```

- getIndexes(): listar índices existentes
```
db.clients.getIndexes()
```

- explain(): analizar el rendimiento de una consulta
```
db.clients.find({ nom: "Reyna" }).explain('executionStats')
```

### Operadores de consulta (find)
- $and: devuelve documentos que cumplen todas las condiciones.
```
db.productes.find({
  $and: [
    { actiu: true },
    { preu: { $gte: 50 } }
  ]
})
```

- $or: devuelve documentos que cumplen al menos una condición.
```
db.productes.find({
  $or: [
    { categoria: "electrònica" },
    { preu: 100 }
  ]
})
```

- $gte: Si el valor es mayor o igual que
```
db.productes.find({
  preu: { $gte: 50 }
})
```

- $lte: Si el valor es menor o igual que
```
db.productes.find({
  preu: { $lte: 200 }
})
```


- $regex: Busca por patrones en texto
```
db.productes.find({
  nom: { $regex: "iphone" }
})
```

### Operadores de agregación (aggregate)
- $group: Agrupa los documentos por un campo
```
db.productes.aggregate([
  { $group: { _id: "$categoria" } }
])
```

- $sum: Suma los valores o cuenta documentos
```
db.productes.aggregate([
  { $group: { _id: "$categoria", total: { $sum: 1 } } }
])
```

- $avg: Calcula la media
```
db.productes.aggregate([
  { $group: { _id: "$categoria", media: { $avg: "$preu" } } }
])
```


### Tipos de índices usados
- Índice simple: El índice se crea sobre un solo campo.
```
db.productes.createIndex({ categoria: 1 })
```

- Índice compuesto: El índice se crea sobre varios campos.
```
db.productes.createIndex({ categoria: 1, preu: -1 })
```

- Índice de texto: El índice permite buscar palabras dentro de campos de texto.:
```
db.productes.createIndex({ nom: "text" })
```
