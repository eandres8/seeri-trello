import { addDoc, collection } from 'firebase/firestore';

import { fireDB } from '@/firebase/config';
import { ListGroup } from '../application/types/items.types';

export const LIST_GROUP = 'list-group';

export class ItemsFirebase {
  static async createGroup(group: ListGroup) {
    return addDoc(collection(fireDB, LIST_GROUP), group);
  }
}