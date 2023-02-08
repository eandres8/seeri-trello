import styles from './ListItems.module.scss';
import { Card } from '@/components/shared';
import { CardItem, NewItem } from '@/components/custom';

interface Props {
  title: string;
}

export const ListItems: React.FC<Props> = ({ title }) => {
  return (
    <Card className={styles['list-items']}>
      <header className={styles.header}>
        <h4>{title}</h4>
      </header>
      <section className={styles.content}>
        <CardItem description='Wooba looba dub dub' createdAt={Date.now()} />
        <CardItem description='Wooba looba dub dub' createdAt={Date.now()} />
      </section>
      <footer>
        <NewItem
          placeholder="Escriba su tarjeta"
          text="+ Agregar tarjeta"
          buttonConfirmHandle={() => {}}
        />
      </footer>
    </Card>
  );
}
