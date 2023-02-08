import styles from "./Button.module.scss";

type ButtonColor =
  | "primary"
  | "primary-outlet"
  | "secondary"
  | "secondary-outlet";

type Props = {
  text: string;
  color?: ButtonColor;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  text,
  className,
  color = "primary",
  ...rest
}) => {
  return (
    <button
      className={[styles.button, styles[color], className].join(" ")}
      {...rest}
    >
      {text}
    </button>
  );
};
