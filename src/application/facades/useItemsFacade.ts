import { v4 as uuidv4 } from 'uuid';

import { UIFacade } from '../types/ui.types';
import { useItemsReducer } from '../reducers/itemsReducer';
import { ItemsFirebase } from '@/services/items-firebase.service';
import { Item, ListGroup } from '@/application/types/items.types';

export const useItemsFacade = (ui: UIFacade, uid: string) => {
  const [state, dispatch] = useItemsReducer();

  const createGroup = async (name: string) => {
    const index = state?.listGroups?.length ?? 0;
    const newGroup: ListGroup = {
      index,
      id: '',
      name,
      itemList: [],
      uid
    }
    try {
      ui.startLoading();
      const result = await ItemsFirebase.createGroup(newGroup);
      newGroup.id = result.id;
    } catch (error) {
      console.log('useItemsFacade.createGroup', {error});

      return null;
    } finally {
      ui.finishLoading();
    }
    dispatch({ type: '[ITEM] ADD_GROUP', payload: newGroup });

    return newGroup;
  }

  const loadGroupList = async () => {
    try {
      ui.startLoading();
      const result = await ItemsFirebase.listGroup(uid);
      dispatch({ type: '[ITEM] LOAD_GROUPS', payload: result })
    } catch (error) {
      console.log('useItemsFacade.loadGroupList', {error});
    } finally {
      ui.finishLoading();
    }
  }

  const createItem = async (description: string, groupId: string) => {
    const group = state.listGroups.find(group => group.id === groupId);
    const index = group?.itemList.length ?? 0;
    const newItem: Item = {
      index,
      id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: groupId,
    };

    const newGroupItem: ListGroup = {
      ...(group as ListGroup),
      itemList: [...(group?.itemList ?? []), newItem]
    };

    try {
      ui.startLoading();

      await ItemsFirebase.createItem(newGroupItem);
    } catch (error) {
      console.log('useItemsFacade.createGroup', {error});

      return null;
    } finally {
      ui.finishLoading();
    }
    dispatch({ type: '[ITEM] ADD_ITEM', payload: newGroupItem });

    return newItem;
  }

  const clearGroups = () => {
    dispatch({ type: '[ITEM] CLEAR_GROUPS' });
  }

  return {            
    itemsState: state,
    createGroup,
    loadGroupList,
    clearGroups,
    createItem,
  }
}