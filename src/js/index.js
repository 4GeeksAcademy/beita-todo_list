// Importar react en el bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Incluir tus estilos en el bundle de webpack
import "../styles/index.css"; // Asegúrate de que este archivo existe

// Importar tu propio componente
import Home from "./component/home.jsx"; // Ruta correcta hacia tu componente

// Renderizar tu aplicación de react
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);
