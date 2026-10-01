import { Link } from "react-router-dom";
import BotonFavorito from "../BotonFavorito";
import styles from "./Item.module.css";

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <article className={styles.card}>
            {/* Click en la imagen lleva al detalle */}
            <Link to={`/producto/${id}`} className={styles.imageLink}>
                <img src={imagen} alt={nombre} className={styles.image} />
            </Link>

            {/* Click en el nombre lleva al detalle */}
            <Link to={`/producto/${id}`} className={styles.titleLink}>
                <h2 className={styles.title}>{nombre}</h2>
            </Link>

            <p className={styles.price}>
                ARS ${precio.toLocaleString("es-AR")}
            </p>

            <div className={styles.actions}>
                <BotonFavorito />
            </div>
        </article>
    );
};

export default Item;