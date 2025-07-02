# Screenmatch Frases API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una API simple que proporciona frases aleatorias de películas o series, incluyendo el título, la frase, el personaje y un póster.

## Descripción

Este proyecto es una API desarrollada con Spring Boot que expone un endpoint para obtener frases aleatorias de películas o series. Cada frase viene acompañada de información relevante como el título de la obra, la frase en sí, el personaje que la dijo y una URL del póster.

## Características

- ✅ Obtén frases aleatorias de películas/series
- ✅ Incluye título, frase, personaje y póster
- ✅ Configuración CORS para desarrollo frontend
- ✅ Persistencia de datos con JPA
- ✅ Patrón DTO para transferencia de datos

## Tecnologías

- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **H2 Database** (base de datos en memoria, configurable)
- **Maven**

## Estructura del Proyecto

```
src/main/java
└── com/aluracursos/screenmatchfrases
    ├── ScreenmatchFrasesApplication.java  // Clase principal
    ├── FraseController.java               // Controlador REST
    ├── FraseService.java                  // Servicio para la lógica de negocio
    ├── FraseRepository.java               // Repositorio para acceder a la base de datos
    ├── Frase.java                         // Entidad JPA
    ├── FraseDTO.java                      // Objeto de Transferencia de Datos (DTO)
    └── CorsConfiguration.java             // Configuración CORS
```

## Configuración

### Base de Datos

Por defecto, el proyecto utiliza una base de datos H2 en memoria. Puedes acceder a la consola H2 en `http://localhost:xxxx/h2-console` con las siguientes credenciales:

- **URL:** jdbc:h2:mem:frasesdb
- **Usuario:** sa
- **Contraseña:** (vacío)

Para cambiar a otra base de datos (ej. PostgreSQL), modifica `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:xxxx/screenmatchfrases
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

### CORS

La configuración CORS permite solicitudes desde `http://xxx.0.0.1:xxxx` (útil para desarrollo con Live Server). Modifica en `CorsConfiguration.java` si necesitas otros orígenes.

## Endpoints

### Obtener frase aleatoria

- **URL:** `/series/frases`
- **Método:** `GET`
- **Respuesta exitosa:**
  ```json
  {
    "titulo": "The Shawshank Redemption",
    "frase": "La esperanza es como un pájaro: cuanto más la encierras, más fuerte canta en tu corazón",
    "personaje": "Andy Dufresne",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  }
  ```

## Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AxelDesarrolloWeb/frasesPelis_aleatorias_javaSpring.git
   cd frasesPelis_aleatorias_javaSpring
   ```

2. Ejecuta la aplicación con Maven:
   ```bash
   mvn spring-boot:run
   ```

3. La aplicación estará disponible en `http://localhost:xxxx`

## Uso con Curl

```bash
curl http://localhost:xxxx/series/frases
```

## Uso con JavaScript

```javascript
fetch('http://localhost:xxxx/series/frases')
  .then(response => response.json())
  .then(data => {
    console.log('Frase aleatoria:', data);
    // {
    //   titulo: "The Matrix",
    //   frase: "La realidad es solo una capa de la cebolla cósmica...",
    //   personaje: "Morpheus",
    //   poster: "https://example.com/poster.jpg"
    // }
  });
```

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/awesome-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add awesome feature'`)
4. Haz push a la rama (`git push origin feature/awesome-feature`)
5. Abre un Pull Request

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Avisos importantes:
- Recuerda que los datos a insertar a la base de datos pueden ser modificados y/o inventados por usted mismo, algunos posters pueden no funcionar con el tiempo.
- Puedes o debes configurar variables de entorno o utilizar otro método para una conexión a la base de datos segura.
