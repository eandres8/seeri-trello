import { useRouter } from 'next/router';

import styles from './Header.module.scss';
import { useItemContext } from '@/application/context/ItemsContext';

export const Header: React.FC = () => {
  const router = useRouter();
  const { doSignOut, clearGroups } = useItemContext();

  const singOut = () => {
    doSignOut();
    clearGroups();
    router.replace('/auth/login');
  }

  return (
    <header className={styles.header}>
        <span>Dashbard</span>
        <span onClick={singOut}>cerrar sesión</span>
    </header>
  );
}
