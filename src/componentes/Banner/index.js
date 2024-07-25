import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
            </div>
        </div>
    );
}