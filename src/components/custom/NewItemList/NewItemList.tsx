import { useState } from "react";

import styles from './NewItemList.module.scss';
import { Card } from '@/components/shared';
import { NewItem } from "../NewItem/NewItem";
import { useItemContext } from '@/application/context/ItemsContext';

export const NewItemList: React.FC = () => {
  const { createGroup } = useItemContext();
  const [textValue, setTextValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleReset = () => {
    setTextValue('');
    setShowInput(false);
  }

  const handleSubmit = async () => {
    if(!textValue) return;

    const result = await createGroup(textValue);
    if (result) {
      handleReset();
    }
  }

  return (
    <Card className={styles['new-item-list']}>
      <NewItem
        placeholder="Nombre de la lista"
        text="+ Agregar lista"
        handleConfirm={handleSubmit}
        textValue={textValue}
        setTextValue={setTextValue}
        handleCancel={handleReset}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    </Card>
  );
};
