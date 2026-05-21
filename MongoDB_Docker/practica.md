# Preguntas
## Bloc 1
**1. Quina és la diferència entre docker run i docker compose up?<br>**
La diferencia entre los dos es que docker run crea el servicio, por ejemplo de MongoDB, manualmente y lo ejecuta. Puedes indicarle diferentes opciones como **-p** para el puerto o **-d** para segundo plano. Comparándolo con docker compose, utilizas un archivo llamado docker-compose.yml, en el cual puedes poner múltiples servicios como el MongoDB y el Mongo Express, para poder ejecutarlo y levantar esos dos servicios automáticamente con un solo comando.

En resumen, docker run es más simple para levantar un solo servicio (se pueden varios, pero es más complejo) y poder ejecutarlo, comparado con docker compose, que puede levantar varios servicios automáticamente y ejecutandolo con un solo comando.


**2. Per a què serveix la instrucció depends_on?<br>**
La instruccion depends_on indica que se debe iniciar cuando el otro contenedor haya arrancado. Por ejemplo, si Mongo Express depende de MongoDB, Mongo Express no se iniciará hasta que MongoDB haya arrancado.

Garanteix que el servei dependent estigui completament operatiu<br>
No, no lo garantiza. Mientras el servicio esté arrancado, el otro contenedor puede iniciarse, aunque no este completamente listo.

**3. Explica quina és la diferència entre una xarxa bridge per defecte i una xarxa personalitzada (amb nom) a Docker Compose.<br>**
La diferencia entre los dos es que bridge es una red automática que, para comunicarse, utiliza IP y tiene menos control sobre las redes. Comparado con una red personalizada, esta puede comunicarse mediante los nombres de los contenedores y es más ordenada a la hora de gestionar las redes.
