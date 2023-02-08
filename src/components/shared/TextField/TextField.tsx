import { InputHTMLAttributes } from 'react';

import styles from './TextField.module.scss';

type Props = {} & InputHTMLAttributes<HTMLInputElement>;

export const TextField: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <input className={[styles['text-field'], className].join(' ')} {...rest} />
  );
}
