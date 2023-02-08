import styles from './Card.module.scss';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={['card', styles.card, className].join(' ')} {...rest}>
      {children}
    </div>
  );
}
