import styles from './header.module.scss';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
        <span>Dashbard</span>
        <span>cerrar sesión</span>
    </header>
  );
}
