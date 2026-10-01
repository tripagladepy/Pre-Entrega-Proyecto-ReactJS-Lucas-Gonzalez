import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ItemListContainer from "./components/products/ItemListContainer";
import DetalleProducto from "./components/products/DetalleProducto";
import FormProductoContainer from "./components/products/FormProductoContainer";
import Carrito from "./components/carrito/Carrito";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />

        <Route
          path="/productos"
          element={<ItemListContainer />}
        />

        <Route
          path="/producto/:id"
          element={<DetalleProducto />}
        />

        <Route
          path="/admin/agregar-producto"
          element={<FormProductoContainer />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />
      </Route>
    </Routes>
  );
};

export default App;