import { UIFacade } from '../types/ui.types';
import { useItemsReducer } from '../reducers/itemsReducer';
import { ItemsFirebase } from '@/services/items-firebase.service';
import { ListGroup } from '@/application/types/items.types';

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
      console.log('useItemsFacade.createGroup', { result });
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
      console.log('useItemsFacade.loadGroupList', { result });
      dispatch({ type: '[ITEM] LOAD_GROUPS', payload: result })
    } catch (error) {
      console.log('useItemsFacade.loadGroupList', {error});
    } finally {
      ui.finishLoading();
    }
  }

  const clearGroups = () => {
    dispatch({ type: '[ITEM] CLEAR_GROUPS' });
  }

  return {
    itemsState: state,
    createGroup,
    loadGroupList,
    clearGroups,
  }
}