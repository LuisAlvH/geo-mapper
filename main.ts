import * as L from "leaflet";
import { obtenerBotonBuscar, obtenerInputDireccion } from "./utils.js";

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

const btn = obtenerBotonBuscar();
let marcadorActual: L.Marker | null = null;
if (btn) {
  btn.addEventListener("click", async () => {
    const input = obtenerInputDireccion();
    if (input) {
      const direccion = input.value;

      if (!direccion) {
        alert("Debes ingresar una dirección");
        return;
      }

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`,
        );
        const data = await res.json();
        //Verificar si se encontraron resultados
        if (!data || data.length === 0) {
          alert("No se encontraron resultados para la dirección ingresada");
          return;
        }
        //Obtener las coordenadas del primer resultado
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        //Actualizar el mapa con las coordenadas obtenidas
        map.setView([lat, lon], 15);
        //Agregar un marcador en la ubicación encontrada

        // Elimina el marcador anterior si existe
        if (marcadorActual) {
          map.removeLayer(marcadorActual);
        }
        marcadorActual = L.marker([lat, lon])
          .addTo(map)
          .bindPopup(direccion)
          .openPopup();
        //Agregar un marcador en la ubicación encontrada
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
}
