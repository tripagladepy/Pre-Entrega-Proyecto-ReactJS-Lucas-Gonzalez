import styles from "./Footer.module.css";
import Asistentes from "../Asistentes";

const Footer = () => {
  const anioActual = new Date().getFullYear();

  const personas = [
    {
      id: 1,
      nombre: "Lucas",
      tarea: "Desarrollo Frontend",
    },
    {
      id: 2,
      nombre: "Sofía",
      tarea: "Diseño y UX/UI",
    },
    {
      id: 3,
      nombre: "Martín",
      tarea: "Gestión del proyecto",
    },
  ];

  return (
    <footer className={styles.footer}>

      <section className={styles.companyInfo}>
        <h2 className={styles.companyTitle}>Fruteria</h2>

        <p className={styles.companyDescription}>
          Tienda online dedicada a ofrecer productos seleccionados
          para nuestros clientes.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Nuestro equipo</h2>

        <Asistentes personas={personas} />
      </section>

      <nav>
        <ul className={styles.footerNav}>
          <li className={styles.footerItem}>
            <a href="#acerca" className={styles.footerLink}>
              Acerca de Nosotros
            </a>
          </li>

          <li className={styles.footerItem}>
            <a href="#privacidad" className={styles.footerLink}>
              Política de Privacidad
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>
          © {anioActual}{" "}
          <span className={styles.brand}>Fruteria</span>{" "}
          – Todos los derechos reservados
        </p>
      </div>

    </footer>
  );
};

export default Footer;