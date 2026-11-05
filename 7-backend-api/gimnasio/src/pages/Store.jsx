import { useState, useEffect } from "react";
import { getProducts, addToCart } from "@/api/store";
import { formatPrice } from "@/utils/formatPrice";
import ProductDetail from "@/components/ProductDetail";
export default function Store({ logueado }) {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    getProducts()
      .then(setProductos)
      .catch((error) => setMensaje(error.message));
  }, []);
  async function agregar(producto) {
    try {
      await addToCart(producto);
      setMensaje(producto.nombre + " agregado al carrito");
    } catch (error) {
      setMensaje(error.message);
    }
  }
  return (
    <>
      <h2>Tienda</h2>
      <p role="status">{mensaje}</p>
      {!logueado && <p>Iniciá sesión para agregar productos.</p>}
      <div className="cards">
        {productos.map((producto) => (
          <article className="card" key={producto.id}>
            <img
              src={
                "https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/" +
                producto.imagen
              }
              alt={producto.nombre}
            />
            <h3>{producto.nombre}</h3>
            <p>{formatPrice(producto.precio)}</p>
            <ProductDetail producto={producto} />
            {logueado && (
              <button onClick={() => agregar(producto)}>
                Agregar al carrito
              </button>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
