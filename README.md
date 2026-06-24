# Página Web de Notas
## Librerías y Frameworks
- Node.js
- npm
    - env
    - express
    - nodemon
    - mongoose
    - jsonwebtoken
- mongoDB (server)
- mongosh (client) (test)

## Características
página web capaz de crear notas por usuarios registrados en mongoDB
- formulario de registro
    - registrar usuarios
        - usuario
        - contraseña

- iniciar sesión
    - validar usuario por sus datos
    - generar un token mostrado al usuario
        - duración de 2 minutos
    - casilla remeber me que funcione con el token con la misma durabilidad del mismo

- notas
    - botones
        - nueva nota
        - ver todas las notas

- Escritura de notas
    - textArea para escribir notas
    - botones
        - guardar
        - cancelar

- notas existentes
    - lista de notas hechas por el usuario

### NOTA: Configurar en un env la ip de la red para que otros usuarios puedan acceder a ella
