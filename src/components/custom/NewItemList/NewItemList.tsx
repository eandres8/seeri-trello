import styles from './NewItemList.module.scss';
import { Card } from '@/components/shared';
import { NewItem } from "../NewItem/NewItem";
import { useItemContext } from '@/application/context/ItemsContext';

export const NewItemList: React.FC = () => {
  const { authState } = useItemContext();

  return (
    <Card className={styles['new-item-list']}>
      <NewItem
        placeholder="Nombre de la lista"
        text="+ Agregar lista"
        handleConfirm={() => {}}
      />
    </Card>
  );
};
