import styles from "./Asistentes.module.css";

const Asistentes = ({ personas }) => {
  return (
    <ul className={styles.cards}>
      {personas.map((persona, index) => (
        <li key={index} className={styles.card}>
          <p className={styles.name}>{persona.nombre}</p>
          <p className={styles.role}>{persona.tarea}</p>
        </li>
      ))}
    </ul>
  );
};

export default Asistentes;