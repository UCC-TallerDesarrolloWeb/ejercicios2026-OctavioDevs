import { useState, useEffect } from "react";
import { getCart, updateQty, removeItem, deleteCart } from "@/api/store";
import { formatPrice } from "@/utils/formatPrice";
export default function Cart({ logueado }) {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    if (logueado)
      getCart()
        .then(setCarrito)
        .catch((error) => setMensaje(error.message));
  }, [logueado]);
  async function cambiar(id, cantidad) {
    if (cantidad < 1) return;
    try {
      await updateQty(id, cantidad);
      setCarrito(await getCart());
    } catch (error) {
      setMensaje(error.message);
    }
  }
  async function eliminar(id) {
    try {
      await removeItem(id);
      setCarrito(await getCart());
    } catch (error) {
      setMensaje(error.message);
    }
  }
  async function vaciar() {
    try {
      await deleteCart();
      setCarrito([]);
    } catch (error) {
      setMensaje(error.message);
    }
  }
  if (!logueado) return <p>Iniciá sesión para ver el carrito.</p>;
  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0,
  );
  return (
    <>
      <h2>Carrito</h2>
      <p role="status">{mensaje}</p>
      {carrito.length === 0 && <p>El carrito está vacío.</p>}
      {carrito.map((item) => (
        <article className="card" key={item.id}>
          <h3>{item.nombre}</h3>
          <p>{formatPrice(item.precio)} por unidad</p>
          <div className="cantidad">
            <button
              aria-label={"Restar " + item.nombre}
              onClick={() => cambiar(item.id, item.cantidad - 1)}
              disabled={item.cantidad === 1}
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span>Cantidad: {item.cantidad}</span>
            <button
              aria-label={"Sumar " + item.nombre}
              onClick={() => cambiar(item.id, item.cantidad + 1)}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            <button
              aria-label={"Eliminar " + item.nombre}
              onClick={() => eliminar(item.id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <p>Subtotal: {formatPrice(item.precio * item.cantidad)}</p>
        </article>
      ))}
      <h3>Total: {formatPrice(total)}</h3>
      <button onClick={vaciar} disabled={carrito.length === 0}>
        Vaciar carrito
      </button>
    </>
  );
}
