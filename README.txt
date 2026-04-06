1. Pokemon por nombre:
URL: https://pokeapi.co/api/v2/pokemon/pikachu
Status: 200OK
Método: GET
hice pokemon/un nombre
2. Pokemon por ID:
URL: https://pokeapi.co/api/v2/pokemon/23
Status: 200OK
Método: GET
lo mismo que en nombre pero con el id

3. Lista limitada:
URL: https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
Status: 200OK
Método: GET
la respuesta tenia next y previous con parámetros limit y offset
4. Informacion de un tipo especifico:
URL: https://pokeapi.co/api/v2/type/fairy
Status: 200OK
Método: GET
/type  devuelve un listado de tipos con sus nombres. 
Usando esos nombres en la URL (por ej. /type/fairy) tenes la información aspociada.



5. Error intencional
URL: https://pokeapi.co/api/v2/noexiste
Status: 404 Not Found
Método: GET
puse cualquier cosa que no exista despues del v2/
