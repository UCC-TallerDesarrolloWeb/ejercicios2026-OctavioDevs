const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Dobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales.",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales.",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];


/**
 * Muestra el modal con la información del producto seleccionado.
 *
 * @method mostrarModal
 * @param {number} num - Índice del producto dentro del arreglo productos.
 * @returns {void} No retorna ningún valor.
 */
const mostrarModal = (num) => {
  document.getElementById("nombre-producto").innerText =
    productos[num].nombre;

  document.getElementById("descripcion-producto").innerText =
    productos[num].description;

  document.getElementById("modal").style.display = "block";
};


/**
 * Cierra el modal de detalle del producto.
 *
 * @method cerrarModal
 * @returns {void} No retorna ningún valor.
 */
const cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};


/**
 * Genera dinámicamente el catálogo de productos.
 *
 * Recorre el arreglo productos y crea una tarjeta para cada producto
 * con su imagen, nombre y un botón para ver el detalle.
 *
 * @method mostrarCatalogo
 * @returns {void} No retorna ningún valor.
 */
const mostrarCatalogo = () => {
  let contenido = "";

  productos.forEach((producto, id) => {
    contenido += `
      <div>
        <img
          src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
          alt="${producto.nombre}"
        >

        <h3>${producto.nombre}</h3>

        <button
          type="button"
          onclick="mostrarModal(${id})"
        >
          Ver detalle de producto
        </button>
      </div>
    `;
  });

  document.getElementById("catalogo").innerHTML = contenido;
};