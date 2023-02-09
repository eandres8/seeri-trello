import { useState, ChangeEvent } from 'react';

import styles from './NewItem.module.scss';
import { TextField, Button } from '@/components/shared';

interface Props {
  placeholder: string;
  text: string;
  handleConfirm: (value: string) => void;
}

export const NewItem: React.FC<Props> = ({ text, placeholder, handleConfirm }) => {
  const [showInput, setShowInput] = useState(false);
  const [textList, setTextList] = useState('');

  const handleCancel = () => {
    setShowInput(false);
    setTextList('');
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setTextList(value);
  }

  const submitText = () => handleConfirm(textList);

  return (
    <div className={styles['new-item']}>
      {
        showInput
        ? (
          <div className='w-100'>
            <div className={styles.input}>
              <TextField className='w-100' value={textList} onChange={handleChange} placeholder={placeholder} />
            </div>
            <div className={styles.actions}>
              <Button text='Crear' onClick={submitText} />
              <Button color='secondary-outlet' text='Cancelar' onClick={handleCancel} />
            </div>
          </div>
        )
        : (<span className={styles.text} onClick={() => setShowInput(true)}>{text}</span>)
      }
    </div>
  );
}
