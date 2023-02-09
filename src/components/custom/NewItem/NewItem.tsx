import { ChangeEvent } from "react";

import styles from "./NewItem.module.scss";
import { TextField, Button } from "@/components/shared";

interface Props {
  placeholder: string;
  text: string;
  textValue: string;
  setTextValue: (value: string) => void;
  handleConfirm: () => void;
  handleCancel: () => void;
  showInput: boolean;
  setShowInput: (value: boolean) => void;
}

export const NewItem: React.FC<Props> = ({
  text,
  placeholder,
  handleConfirm,
  handleCancel,
  showInput,
  setShowInput,
  textValue,
  setTextValue,
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setTextValue(value);
  };

  return (
    <div className={styles["new-item"]}>
      {showInput ? (
        <div className="w-100">
          <div className={styles.input}>
            <TextField
              className="w-100"
              value={textValue}
              onChange={handleChange}
              placeholder={placeholder}
            />
          </div>
          <div className={styles.actions}>
            <Button text="Crear" onClick={handleConfirm} />
            <Button
              color="secondary-outlet"
              text="Cancelar"
              onClick={handleCancel}
            />
          </div>
        </div>
      ) : (
        <span className={styles.text} onClick={() => setShowInput(true)}>
          {text}
        </span>
      )}
    </div>
  );
};
