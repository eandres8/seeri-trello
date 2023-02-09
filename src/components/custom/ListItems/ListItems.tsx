import styles from "./ListItems.module.scss";
import { Card } from "@/components/shared";
import { CardItem, NewItem } from "@/components/custom";
import { ListGroup } from "@/application/types/items.types";

interface Props {
  group: ListGroup;
}

export const ListItems: React.FC<Props> = ({ group }) => {
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
          handleConfirm={() => {}}
          textValue={""}
          setTextValue={() => {}}
          handleCancel={() => {}}
          showInput={false}
          setShowInput={() => {}}
        />
      </footer>
    </Card>
  );
};
