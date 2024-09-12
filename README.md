# Proyecto: Eliminador de Fondo de Imágenes

Este proyecto es una utilidad en Node.js que elimina el fondo de imágenes en formato `.jpg`, `.jpeg` o `.png` utilizando la API de [remove.bg](https://www.remove.bg/).

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v12 o superior)
- Una clave API válida de [remove.bg](https://www.remove.bg/)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio

2. instala las dependencias:
    ```bash
    npm install

3. Crea un archivo .env en la raíz del proyecto y agrega tu clave API de remove.bg
    ```bash
    REMOVE_BG_API_KEY=tu_clave_api

4. Crea las siguientes carpetas:
   - images/ - Coloca las imágenes a las cuales deseas eliminar el fondo.
   - output/ - Aquí se guardarán las imágenes con el fondo eliminado.

## Ejecución

1. Coloca las imágenes que deseas procesar en la carpeta 'images/'

2. Ejecuta el siguiente comando:
    ```bash
    node index.js