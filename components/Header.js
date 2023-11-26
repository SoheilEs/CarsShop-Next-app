import styles from "../styles/Header.module.css";
import Link from "next/link";
const Header = () => {
    return(
        <header className={styles.container}>
        <div className={styles.top}>
            <h1>SUMMIT CAR</h1>
            <span className={styles.topLine}></span>
            <p>Choose & Buy your car</p>
        </div>
      

        </header>
    );
}

export default Header