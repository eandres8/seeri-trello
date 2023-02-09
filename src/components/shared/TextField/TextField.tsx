import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./TextField.module.scss";

type Props = { error?: string; label?: string; } & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const TextField = forwardRef<any, Props>(({ className, name, error, label, ...rest }, ref) => {
  return (
    <div className={styles['text-field-content']}>
      {
        label && <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      }
      <input
        className={[styles["text-field"], className].join(" ")}
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
      { error && <span className={styles['message-error']}>{error}</span> }
    </div>
  );
});


