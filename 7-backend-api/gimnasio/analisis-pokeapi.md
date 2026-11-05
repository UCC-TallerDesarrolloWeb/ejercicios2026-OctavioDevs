# Consulta a PokeAPI

GET https://pokeapi.co/api/v2/pokemon/1/

La respuesta es un objeto JSON. id es 1 y name es bulbasaur.
height es 7 (decímetros: 0,7 metros) y weight es 69 (hectogramos: 6,9 kg).
types contiene los tipos grass y poison. sprites.front_default contiene la URL de su imagen.
abilities contiene habilidades y stats contiene estadísticas como vida, ataque y defensa.

Para realizar la práctica en Postman: importar pokeapi.postman_collection.json,
abrir Consultar Bulbasaur y presionar Send. Revisar el estado 200 y el cuerpo JSON.
Se verificó la consulta por HTTP. Falta el envío manual desde Postman.
