import styles from './Button.module.scss';

type Props = { text: string } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ text, className, ...rest }) => {
  return (
    <button className={[styles.button, className].join(' ')} {...rest}>{ text }</button>
  );
}
