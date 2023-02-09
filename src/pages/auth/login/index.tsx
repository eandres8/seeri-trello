import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import styles from './login.module.scss';
import { TextField, Button, Card } from '@/components/shared';
import { useItemContext } from '@/application/context/ItemsContext';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { doSignIn } = useItemContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async ({ username, password }: any) => {
    const result = await doSignIn(username, password);
    
    if(result) {
      router.push('/');
    }
  };
  
  return (
    <div className={[styles.login, 'flex-column-center'].join(' ')}>

      <h1 className={styles.title}>Ingresa a Seeri Trello</h1>
      
      <Card className={[styles.card, 'flex-column-center'].join(' ')}>
        <form onSubmit={handleSubmit(onSubmit)} className={[styles.form, "flex-column-center"].join(" ")}>
          <TextField
            label='Usuario'
            className="w-100"
            type="email"
            {...register("username", { required: true })}
            error={errors["username"] ? 'El campo es obligatorio' : ''}
          />
          <TextField
            label='Contraseña'
            type="password"
            className="w-100"
            {...register("password", { required: true })}
            error={errors["password"] ? 'El campo es obligatorio' : ''}
          />
          <div className='separator'></div>
          <Button text='Ingresar' className='w-100' />
          <Link href="/auth/register" legacyBehavior>
            <a className='link'>Crear usuario</a>
          </Link>
        </form>
      </Card>
      
    </div>
  );
}

export default LoginPage;
