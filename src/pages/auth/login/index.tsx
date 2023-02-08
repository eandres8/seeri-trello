import Link from 'next/link';

import styles from './login.module.scss';
import { TextField, Button, Card } from '@/components/shared';

const LoginPage: React.FC = () => {
  return (
    <div className={[styles.login, 'flex-column-center'].join(' ')}>

      <h1 className={styles.title}>Ingresa a Seeri Trello</h1>
      
      <Card className={[styles.card, 'flex-column-center'].join(' ')}>
        <label htmlFor="user" className='w-100'>Usuario</label>
        <TextField name='user' id='user' className='w-100' />
        <label htmlFor="pass" className='w-100'>Contraseña</label>
        <TextField name='pass' type='password' id='pass' className='w-100' />

        <div className='separator'></div>
        <Button text='Ingresar' className='w-100' />
        <Link href="/auth/register" legacyBehavior>
          <a className='link'>Crear usuario</a>
        </Link>
      </Card>
      
    </div>
  );
}

export default LoginPage;
