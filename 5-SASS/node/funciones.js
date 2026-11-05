/**
 * Calcula el área de un rectángulo.
 * @param {number} ancho - Ancho del rectángulo.
 * @param {number} alto - Alto del rectángulo.
 * @returns {number} Área del rectángulo.
 */
export function calcularArea(ancho, alto) {
  return ancho * alto;
}
/**
 * Crea los datos de un usuario.
 * @param {string} nombre - Nombre del usuario.
 * @param {number} edad - Edad del usuario.
 * @param {Object} opciones - Opciones de la cuenta.
 * @param {boolean} opciones.activo - Estado de la cuenta.
 * @param {string} opciones.rol - Rol del usuario.
 * @returns {Object} Datos del usuario.
 */
export function crearUsuario(nombre, edad, opciones) {
  return { nombre, edad, activo: opciones.activo, rol: opciones.rol };
}
