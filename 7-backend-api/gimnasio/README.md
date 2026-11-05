# Gimnasio UCC

Prácticas de Taller de Desarrollo Web con React y JavaScript.

## Ejecutar

```powershell
npm install
npm run dev
```

Ingresar a la dirección que muestre Vite. Usuario: `admin`. Password: `admin`.
La sesión se mantiene en el estado de React y se reinicia al recargar.

```powershell
npm run build
npm run lint
```

Se conserva `src/styles/login.css` como versión básica del ejercicio.
La aplicación usa su adaptación en `src/styles/_login.scss`.

## API local

En otra terminal, dentro de esta carpeta:

```powershell
npm run services
```

La API está en http://localhost:4000. Incluye `/activities`, `/products` y `/cart`.
`.env` contiene solamente la URL local de la API.

Rutas de práctica: `/poke-basico` consulta Bulbasaur y `/poke` consulta los primeros 20 Pokémon.
`/tienda` y `/carrito` usan la API local; iniciar sesión para comprar.

Importar `pokeapi.postman_collection.json` en Postman y pulsar Send para realizar ese paso manual del ejercicio.
