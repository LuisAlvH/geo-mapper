# 🗺️ Mapa Interactivo con TypeScript y OpenStreetMap

Este proyecto es una aplicación web que permite a los usuarios buscar direcciones y visualizarlas en un mapa interactivo. Está construido con TypeScript, Vite y la librería Leaflet, utilizando los datos de OpenStreetMap.

## ✨ Características

- ✅ **Búsqueda de direcciones:** Encuentra cualquier lugar del mundo.
- 🗺️ **Visualización en mapa:** El mapa se centra automáticamente en la ubicación encontrada.
- 📍 **Marcador único:** Muestra un solo marcador a la vez para mantener la interfaz limpia.
- 🎨 **Diseño moderno:** Interfaz responsiva y agradable gracias a CSS personalizado.
- 📦 **Código modular:** Organizado en módulos para facilitar el mantenimiento.

## 🛠️ Tecnologías y Dependencias

- **TypeScript:** Para un código más robusto y escalable.
- **Vite:** Entorno de desarrollo ultrarrápido.
- **Leaflet:** Librería de mapas interactivos.
- **OpenStreetMap:** Fuente de datos de mapas.
- **@types/leaflet:** Tipos de TypeScript para Leaflet.

## 📂 Estructura del Proyecto

/
├── index.html # Página principal
├── main.ts # Lógica de la aplicación y del mapa
├── utils.ts # Funciones auxiliares para el DOM
├── style.css # Estilos personalizados
├── package.json # Dependencias y scripts
├── tsconfig.json # Configuración de TypeScript

## 🚀 Instalación y Uso

1.  **Clona el repositorio:**
    ```bash
    git clone <URL-DEL-REPOSITORIO>
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Abre tu navegador:** Visita la URL que aparece en la terminal (ej. `http://localhost:5173`).

## ⚙️ Cómo Funciona

1.  El usuario ingresa una dirección y presiona "Buscar".
2.  Se realiza una petición a la API de Nominatim para obtener las coordenadas.
3.  El mapa se centra en la ubicación y muestra un marcador.
4.  Al realizar una nueva búsqueda, el marcador anterior se elimina.

## 🔮 Posibles Mejoras

- **Autocompletado de direcciones:** Sugerir direcciones mientras el usuario escribe.
- **Historial de búsquedas:** Guardar y mostrar búsquedas recientes.
- **Múltiples marcadores:** Permitir añadir varios marcadores en el mapa.
- **Información adicional:** Mostrar detalles como país, ciudad o código postal.
- **Mejoras en la UI/UX:** Añadir animaciones y optimizar para móviles.
- **Despliegue:** Publicar la aplicación en servicios como Vercel o Netlify.

## 🙏 Créditos

- [Leaflet](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
