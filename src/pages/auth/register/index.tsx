import Link from 'next/link';

import styles from './register.module.scss';
import { TextField, Button, Card } from '@/components/shared';

const RegisterPage: React.FC = () => {
  return (
    <div className={[styles.register, 'flex-column-center'].join(' ')}>

      <h1 className={styles.title}>Registrar en Seeri Trello</h1>
      
      <Card className={[styles.card, 'flex-column-center'].join(' ')}>
        <label htmlFor="user" className='w-100'>Usuario</label>
        <TextField name='user' id='user' className='w-100' />
        <label htmlFor="pass" className='w-100'>Contraseña</label>
        <TextField name='pass' type='password' id='pass' className='w-100' />
        <label htmlFor="confirm-pass" className='w-100'>Confirmar Contraseña</label>
        <TextField name='confirm-pass' type='password' id='confirm-pass' className='w-100' />

        <div className='separator'></div>
        <Button text='Registrar' className='w-100' />
        <Link href="/auth/login" legacyBehavior>
          <a className='link'>Ya estoy registrado</a>
        </Link>
      </Card>
      
    </div>
  );
}

export default RegisterPage;
