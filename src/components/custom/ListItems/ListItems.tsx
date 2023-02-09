import { useState } from "react";

import styles from "./ListItems.module.scss";
import { Card } from "@/components/shared";
import { CardItem, NewItem } from "@/components/custom";
import { ListGroup } from "@/application/types/items.types";
import { useItemContext } from "@/application/context/ItemsContext";

interface Props {
  group: ListGroup;
}

export const ListItems: React.FC<Props> = ({ group }) => {
  const { createItem } = useItemContext();
  const [textValue, setTextValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleReset = () => {
    setTextValue('');
    setShowInput(false);
  }

  const handleSubmit = async () => {
    if(!textValue) return;

    const result = await createItem(textValue, group.id);
    if (result) {
      handleReset();
    }
  }

  return (
    <Card className={styles["list-items"]}>
      <header className={styles.header}>
        <h4>{group.name}</h4>
      </header>
      <section className={styles.content}>
        {group.itemList.map((item) => (
          <CardItem
            key={item.id}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))}
      </section>
      <footer>
        <NewItem
          placeholder="Escriba su tarjeta"
          text="+ Agregar tarjeta"
          handleConfirm={handleSubmit}
          textValue={textValue}
          setTextValue={setTextValue}
          handleCancel={handleReset}
          showInput={showInput}
          setShowInput={setShowInput}
        />
      </footer>
    </Card>
  );
};
