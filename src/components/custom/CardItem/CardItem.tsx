import styles from './CardItem.module.scss';
import { Card } from '@/components/shared';

interface Props {
  description: string;
  createdAt: number;
}

export const CardItem: React.FC<Props> = ({ description, createdAt }) => {
  return (
    <Card className={styles['card-item']}>
      <div className={styles['card-description']}>
        {description}
      </div>
      <div className={styles['created-at']}>
        {createdAt}
      </div>
    </Card>
  );
}
