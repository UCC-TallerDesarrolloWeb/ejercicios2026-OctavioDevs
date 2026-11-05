import { useRef } from "react";
import { formatPrice } from "@/utils/formatPrice";
export default function ProductDetail({ producto }) {
  const dialog = useRef(null);
  return (
    <>
      <button onClick={() => dialog.current.showModal()}>Ver detalle</button>
      <dialog ref={dialog}>
        <h2>{producto.nombre}</h2>
        <p>{producto.description}</p>
        <p>Marca: {producto.marca}</p>
        <p>Talles: {producto.talle.join(", ")}</p>
        <p>{formatPrice(producto.precio)}</p>
        <button onClick={() => dialog.current.close()}>Cerrar</button>
      </dialog>
    </>
  );
}
