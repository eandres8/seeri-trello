import styles from './CardItem.module.scss';
import { Card } from '@/components/shared';

interface Props {
  description: string;
  createdAt: number;
}

export const CardItem: React.FC<Props> = ({ description, createdAt }) => {
  const dateText = (createdDate: number) => {
    const auxDate = new Date(createdDate);
    return auxDate.toISOString().split('T')[0];
  };

  return (
    <Card className={styles['card-item--content']}>
      <div className={styles['card-description']}>
        {description}
      </div>
      <div className={styles['date-section']}>
        {dateText(createdAt)}
      </div>
    </Card>
  );
}
