import styles from "./Carrito.module.css";

const Carrito = () => {
  return (
    <section className={styles.container}>
      <h1>Carrito</h1>

      <p className={styles.emptyMessage}>
        Tu carrito está vacío.
      </p>
    </section>
  );
};

export default Carrito;