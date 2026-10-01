import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./DetalleProducto.module.css";

const DetalleProducto = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/datos/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar el producto");
        }

        return res.json();
      })
      .then((datos) => {
        const productoEncontrado = datos.find(
          (producto) => producto.id === Number(id)
        );

        if (!productoEncontrado) {
          throw new Error("No se encontró el producto");
        }

        setProducto(productoEncontrado);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return (
      <div className={styles.statusContainer}>
        Cargando detalle del producto...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.statusContainer}>
        Error: {error}
      </div>
    );
  }

  if (!producto) {
    return (
      <div className={styles.statusContainer}>
        Producto no encontrado
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/productos" className={styles.backLink}>
        ← Volver a productos
      </Link>

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className={styles.image}
          />
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{producto.nombre}</h1>

          <p className={styles.price}>
            ARS ${producto.precio.toLocaleString("es-AR")}
          </p>

          <p>
            Stock disponible: {producto.stock}
          </p>

          <button className={styles.buyButton}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;