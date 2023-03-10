import { addDoc, getDocs, doc, updateDoc, query, where, collection } from 'firebase/firestore';

import { fireDB } from '@/firebase/config';
import { ListGroup } from '../application/types/items.types';
import { Item } from '@/application/types/items.types';

export const LIST_GROUP = 'list-group';

export class ItemsFirebase {
  static async createGroup(group: ListGroup) {
    return addDoc(collection(fireDB, LIST_GROUP), group);
  }
  
  static async createItem(group: ListGroup) {
    const groupRef = doc(fireDB, LIST_GROUP, group.id);

    return updateDoc(groupRef, group);
  }

  static async listGroup(uid: string) {
    const q = query(collection(fireDB, LIST_GROUP), where("uid", "==", uid));
    return getDocs(q).then(snapShots => {
      let listGroup: ListGroup[] = [];
      snapShots.forEach(item => {
        listGroup.push({
          ...item.data(),
          id: item.id,
        } as ListGroup);
      });

      return listGroup;
    });
  }
}