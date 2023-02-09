import Link from "next/link";
import { useForm } from "react-hook-form";

import { ChangeEvent, FC } from "react";

import styles from "./register.module.scss";
import { TextField, Button, Card } from "@/components/shared";

const RegisterPage: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors
  } = useForm();

  const onSubmit = (values: any) => {
    console.log({ values });
  };

  const handleConfirmPass = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValue(name, value);

    if (getValues('password') !== value) {
      setError(name, { message: 'La contraseña no coincide' });
      return;
    }

    clearErrors(name);
  }

  return (
    <div className={[styles.register, "flex-column-center"].join(" ")}>
      <h1 className={styles.title}>Registrar en Seeri Trello</h1>

      <Card className={[styles.card, "flex-column-center"].join(" ")}>
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
          <TextField
            label='Confirmar Contraseña'
            type="password"
            className="w-100"
            {...register("confirm-pass", { required: true, onChange: handleConfirmPass })}
            error={errors["confirm-pass"]?.message?.toString() || ''}
          />

          <div className="separator"></div>

          <Button text="Registrar" className="w-100" />
          <Link href="/auth/login" legacyBehavior>
            <a className="link">Ya estoy registrado</a>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
