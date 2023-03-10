import { useReducer } from "react";

import { ItemsActionType, ItemsState } from "../types/items.types";

export const initialItemsState: ItemsState = {
  listGroups: [],
};

export const itemsReducer = (
  state: ItemsState,
  action: ItemsActionType
): ItemsState => {
  switch (action.type) {
    case "[ITEM] ADD_ITEM":
      return { ...state, listGroups: state.listGroups.map(group => {
        if(group.id === action.payload.id) {
          return action.payload;
        }

        return group;
      } ) };

    case "[ITEM] ADD_GROUP":
      return {
        ...state,
        listGroups: [...state.listGroups, action.payload].sort(
          (a, b) => a.index - b.index
        ),
      };

    case "[ITEM] LOAD_GROUPS":
      return { ...state, listGroups: action.payload.sort(
        (a, b) => a.index - b.index
      ) };

    case '[ITEM] CLEAR_GROUPS':
      return { ...initialItemsState };

    default:
      return state;
  }
};

export const useItemsReducer = () => {
  return useReducer(itemsReducer, initialItemsState);
};
