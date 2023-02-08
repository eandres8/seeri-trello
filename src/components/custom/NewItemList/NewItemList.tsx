import styles from './NewItemList.module.scss';
import { Card } from '@/components/shared';
import { NewItem } from "../NewItem/NewItem";

interface Props {}

export const NewItemList: React.FC<Props> = () => {
  return (
    <Card className={styles['new-item-list']}>
      <NewItem
        placeholder="Nombre de la lista"
        text="+ Agregar lista"
        buttonConfirmHandle={() => {}}
      />
    </Card>
  );
};
