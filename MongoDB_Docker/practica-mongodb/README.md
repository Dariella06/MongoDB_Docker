# Docker + MongoDB
- Descripción:
En Este proyecto se implementara el **Docker + MongoDB**, consistira en diseñar, configurar y aprender sobre el **MongoDB**. 
Dentro de este proyecto contendra contenedores:
- **Bloc 0:** Crearemos el repositorio en GitHub o GitLab. Instalaremos **Git** y **Docker** si no los tenemos. Crearemos el archivo practica.md para las respuestas y capturas, y un README.md con la información que nos pide para replicar el proyecto.
- **Bloc 2:** Crearemos un script para poder llenar automáticamente las colecciones de productes, clients y comandes. También probaremos que los datos no se borren al apagar los contenedores usando volúmenes y responderemos a las preguntas poniendolas en **practica.md**.
- **Bloc 3:** Desarrollaremos un archivo para hacer las operaciones de CRUD en la base de datos: insertar, leer, actualizar y eliminar datos.
- **Bloc 4:** Haremos consultas más complejas (Consultas avanzadas, gestión de indices).

## Que es?<br>
MongoDB es un sistema de gestión de bases de datos NoSQL (No Relacional) que está diseñado para almacenar, organizar y gestionar grandes volúmenes de información mediante un modelo orientado a documentos independientes, en lugar de utilizar la estructura tradicional de tablas jerárquicas y filas conectadas.

##  

## Prerrequisitos
Para ejecutar este proyecto necesitas:<br>
- Docker (versión 24 o superior)
- Docker Compose (v2 o superior)
- Git (versión 2.x)

**Sistema operativo:** Windows, Linux o macOS<br>
**Opcional** : VS Code

## Estructura de ficheros
practica-mongodb/<br>
├── docker-compose.yml      # Definición de los servicios<br>
├── mongo-init/<br>
│   └── init.js             # Script de inicialización de la base de datos<br>
├── queries/<br>
│   ├── crud.js             # Operaciones CRUD (Create, Read, Update, Delete)<br>
│   └── advanced.js         # Consultas avanzadas e índices<br>
├── data/                   # Volumen de datos persistente de MongoDB<br>
└── README.md               # Documentación del proyecto

## Instruccions de instalación y puesto en marcha
Este comando instala el subsistema de Linux (WSL) con Ubuntu para poder trabajar en un entorno Linux dentro de Windows.
```
wsl --install -d Ubuntu
```

Una vez instalado entraremos al Ubuntu que creamos y lo actualizaremos con este comando:
- Este comando actualiza la lista de paquetes del sistema. El parámetro -y indica que acepta automáticamente la instalación sin pedir confirmación.<br>
```
sudo apt update -y
```

Cuando acabe la instalación tendremos que ponernos en el usuario root:
```
sudo -i
```
Esto nos da permisos de administrador (root) para poder instalar y modificar el sistema.

Dentro instalaremos dependencias:
```
apt install -y ca-certificates curl gnupg
```
Instala herramientas necesarias para poder añadir repositorios externos y gestionar claves de seguridad.

Crearemos para añadir la clave oficial para el Docker
```
install -m 0755 -d /etc/apt/keyrings
```
Este comando crea una carpeta donde se guardarán las claves de autenticación de repositorios.

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Ponemos permisos
```
chmod a+r /etc/apt/keyrings/docker.gpg
```

Ahora añadiremos el repositorio Docker:
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null
```
Esto añade el repositorio oficial de Docker para poder instalarlo desde apt

Ahora instalaremos el Docker:
```
apt update
```
```
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
Instala Docker y todas sus herramientas necesarias, incluido Docker Compose.

Comprobaremos que está instalado viendo su version
```
docker --version
```

```
docker compose version
```

Ahora crearemos el grupo docker:
```
sudo groupadd docker
```

El exit es para salir del ususario root, 
```
exit
```

Una vez hecho esto meteremos nuestro ususario a ese grupo:
```
sudo usermod -aG docker $USER
```

Recargamos los grupos
```
newgrp docker
```

Arrancamos el Docker:
```
sudo dockerd
```

En otra pantalla de ubuntu verificamos con este comando
```
docker run hello-world
```

## Comandos principales para operar el entorno

- Encender los contenedores
```
docker compose up -d
```

- Parar los contenedores
```
docker compose stop
```

- Parar y eliminar los contenedores
```
docker compose down
```

- Ver los logs de los contenedores
```
docker compose logs
```

- Ejecutar los json de los bloques
```
docker exec -i mongodb-botiga mongosh -u admin -p admin123 < queries/crud.js
```
```
docker exec -i mongodb-botiga mongosh -u admin -p admin123 < queries/advance.js
```

- Veur Mongo Express desdel navegador
```
http://localhost:8081
```

- Crear nuevos datos manualmente para mongodb
```
db.productes.insertOne({
  nom: "Teclat Gaming",
  preu: 59.99,
  categoria: "electrònica",
  estoc: 15,
  valoracio: 4.5,
  actiu: true
})
```

- Consultar todos los datos de una collection
```
db.productes.find()
```

## Explicación de los volúmenes y redes configurados

### Volumenes
  Los volúmenes sirven para almacenar los datos de forma persistente. Los datos no se pierden aunque el contenedor se elimine o reinicie. También permiten acceder a los archivos de la base de datos desde el sistema anfitrión.

  Tenemos dos volúmenes:

  - **./data:/data/db** --> Carpeta donde MongoDB almacena los datos de la base de datos, como documentos, colecciones y registros. Todos los cambios realizados (inserciones, eliminaciones y actualizaciones) se guardarán aquí y podrán verse posteriormente.

  - **./mongo-init:/docker-entrypoint-initdb.d** --> Carpeta que contiene los scripts de inicialización de MongoDB. Aquí se pueden crear bases de datos, colecciones o insertar documentos iniciales. Estos scripts se ejecutan automáticamente la primera vez que se inicia el contenedor.

### Redes
Las redes configuradas que tenemos son una personalizada usando el driver bridge. Las redes sirven para poder comunicar diferentes servicios, como MongoDB con mongo-express o incluso con mi ordenador, para poder hacer configuraciones, aplicar cambios y acceder a la base de datos.

- **Red personalizada:** Esta red nos permite poner un nombre a la red y conectarnos entre contenedores usando nombres en vez de recordar direcciones IP, haciendo la configuración más simple, organizada y fácil de mantener.
```
networks:
      - xarxa-botiga 
```

- **Redes por defecto:** En este caso utilizamos el driver `bridge` dentro de la red personalizada para poder conectar los contenedores entre sí usando nombres y no direcciones IP. Esto hace que la conexión sea más simple y organizada. Si no se utilizara esta red, habría que conectarse usando IPs, las cuales pueden cambiar y hacer más difícil mantener la comunicación entre servicios.
```
networks:
  xarxa-botiga:
    driver: bridge
```