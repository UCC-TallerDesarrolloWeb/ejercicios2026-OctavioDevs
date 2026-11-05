const url = import.meta.env.VITE_BASE_URL;
export async function getProducts() {
  const response = await fetch(url + "products");
  if (!response.ok) throw new Error("No se pudieron cargar los productos");
  return response.json();
}
export async function getCart() {
  const response = await fetch(url + "cart");
  if (!response.ok) throw new Error("No se pudo cargar el carrito");
  return response.json();
}
export async function addToCart(producto) {
  const carrito = await getCart();
  const item = carrito.find((item) => item.id === producto.id);
  if (item) return updateQty(item.id, item.cantidad + 1);
  const response = await fetch(url + "cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...producto, cantidad: 1 }),
  });
  if (!response.ok) throw new Error("No se pudo agregar el producto");
  return response.json();
}
export async function updateQty(id, cantidad) {
  const response = await fetch(url + "cart/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cantidad }),
  });
  if (!response.ok) throw new Error("No se pudo actualizar la cantidad");
  return response.json();
}
export async function removeItem(id) {
  const response = await fetch(url + "cart/" + id, { method: "DELETE" });
  if (!response.ok) throw new Error("No se pudo eliminar el producto");
}
export async function deleteCart() {
  const carrito = await getCart();
  // json-server elimina cada recurso por su id.
  for (const item of carrito) await removeItem(item.id);
}
