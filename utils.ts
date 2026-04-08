export function obtenerBotonBuscar(): HTMLButtonElement | null {
  const btn = document.getElementById("btnBuscar");
  return btn instanceof HTMLButtonElement ? btn : null;
}

export function obtenerInputDireccion(): HTMLInputElement | null {
  const input = document.getElementById("direccion");
  return input instanceof HTMLInputElement ? input : null;
}
