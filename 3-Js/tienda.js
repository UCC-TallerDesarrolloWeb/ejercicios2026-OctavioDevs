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
      description: "Guantes de Sparring de 10 onzas habilitados para torneos internacionales.",
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

// Formatea los precios como $35.000,00.
const formatoMoneda = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function formatearPrecio(precio) {
    return formatoMoneda.format(precio);
  }

  // Obtiene el carrito guardado.
  // Cada posición contiene el índice de un producto.
  function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }

  function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Actualiza el contador del enlace al carrito.
  function actualizarContador() {
    const contador = document.getElementById("cantidad-carrito");

    if (contador) {
      contador.innerText = obtenerCarrito().length;
    }
  }

  // Muestra los detalles del producto.
  function mostrarModal(num) {
    document.getElementById("nombre-producto").innerText =
      productos[num].nombre;

    document.getElementById("descripcion-producto").innerText =
      productos[num].description;

    document.getElementById("modal").showModal();
  }

  function cerrarModal() {
    document.getElementById("modal").close();
  }

  // Aplica filtros y orden al catálogo.
  function mostrarCatalogo() {
    const busqueda = document.getElementById("search")
      .value.trim().toLowerCase();

    const precioMinimo = document.getElementById("price-min").value;
    const precioMaximo = document.getElementById("price-max").value;
    const marca = document.getElementById("marca").value;
    const orden = document.getElementById("orden").value;

    const categorias = Array.from(
      document.querySelectorAll('input[name="tipo"]:checked')
    ).map((checkbox) => checkbox.value);

    // Conserva el índice original de cada producto.
    // Así, ordenar o filtrar no altera las referencias del carrito.
    let lista = productos.map((producto, id) => ({
      ...producto,
      id: id,
    }));

    lista = lista.filter((producto) => {
      const coincideTexto =
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.description.toLowerCase().includes(busqueda);

      const coincideMinimo =
        precioMinimo === "" ||
        producto.precio >= Number(precioMinimo);

      const coincideMaximo =
        precioMaximo === "" ||
        producto.precio <= Number(precioMaximo);

      const coincideMarca =
        marca === "" || producto.marca === marca;

      const coincideCategoria =
        categorias.length === 0 ||
        categorias.includes(producto.categoria.toLowerCase());

      return (
        coincideTexto &&
        coincideMinimo &&
        coincideMaximo &&
        coincideMarca &&
        coincideCategoria
      );
    });

    switch (orden) {
      case "precio-asc":
        lista.sort((a, b) => a.precio - b.precio);
        break;

      case "precio-desc":
        lista.sort((a, b) => b.precio - a.precio);
        break;

      case "nombre-asc":
        lista.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
        break;

      case "nombre-desc":
        lista.sort((a, b) => b.nombre.localeCompare(a.nombre, "es"));
        break;
    }

    let contenido = "";

    lista.forEach((producto) => {
      contenido += `
        <div>
          <img
            src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
            alt="${producto.nombre}"
          >

          <h3>${producto.nombre}</h3>
          <p>Marca: ${producto.marca}</p>
          <p>Precio: ${formatearPrecio(producto.precio)}</p>

          <button
            type="button"
            onclick="mostrarModal(${producto.id})"
          >
            Ver detalle de Producto
          </button>

          <button
            type="button"
            onclick="agregarAlCarrito(${producto.id})"
          >
            Agregar al Carrito
          </button>
        </div>
      `;
    });

    document.getElementById("catalogo").innerHTML =
      contenido || "<p>No se encontraron productos con esos filtros.</p>";

    actualizarContador();
  }

  // Agrega una unidad al carrito.
  function agregarAlCarrito(num) {
    const carrito = obtenerCarrito();

    carrito.push(num);

    guardarCarrito(carrito);
    actualizarContador();
  }

  // Vacía el carrito usando removeItem.
  function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
  }

  // Elimina una unidad del producto usando splice.
  function eliminarProducto(num) {
    const carrito = obtenerCarrito();
    const posicion = carrito.indexOf(num);

    if (posicion !== -1) {
      carrito.splice(posicion, 1);
    }

    guardarCarrito(carrito);
    mostrarCarrito();
  }

  // Muestra los productos agrupados, sus cantidades y el total.
  function mostrarCarrito() {
    const carrito = obtenerCarrito();
    let contenido = "";
    let total = 0;

    // Cuenta cuántas veces aparece cada producto.
    const cantidades = {};

    carrito.forEach((num) => {
      cantidades[num] = (cantidades[num] || 0) + 1;
    });

    Object.keys(cantidades).forEach((clave) => {
      const num = Number(clave);
      const producto = productos[num];
      const cantidad = cantidades[num];
      const subtotal = producto.precio * cantidad;

      total += subtotal;

      contenido += `
        <div>
          <img
            src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
            alt="${producto.nombre}"
          >

          <h3>${producto.nombre}</h3>
          <p>${producto.description}</p>

          <p>Precio unitario: ${formatearPrecio(producto.precio)}</p>
          <p>Cantidad: ${cantidad}</p>
          <p>Subtotal: ${formatearPrecio(subtotal)}</p>

          <button
            type="button"
            onclick="eliminarProducto(${num})"
          >
            Eliminar una unidad
          </button>
        </div>
      `;
    });

    document.getElementById("carrito").innerHTML =
      contenido || "<p>No hay productos en el carrito.</p>";

    document.getElementById("cantidad-total").innerText = carrito.length;

    document.getElementById("total-pagar").innerText =
      formatearPrecio(total);

    document.getElementById("vaciar-carrito").disabled =
      carrito.length === 0;

    actualizarContador();
  }
