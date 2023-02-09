export type Item = {
  id: string;
  status: string;
  description: string;
  index: number;
  createdAt: number;
}

export type ListGroup = {
  id: string;
  index: number;
  name: string;
  uid: string;
  itemList: Item[];
};

export type ItemsState = {
  listGroups: ListGroup[];
}

export type ItemsActionType =
  | { type: "[ITEM] ADD_GROUP", payload: ListGroup }
  | { type: "[ITEM] LOAD_GROUPS", payload: ListGroup[] }
  | { type: "[ITEM] ADD_ITEM", payload: ListGroup }
  | { type: "[ITEM] CLEAR_GROUPS" }

export type ItemsFacade = {
  itemsState: ItemsState;
  createGroup: (name: string) => Promise<ListGroup | null>;
  loadGroupList: () => Promise<void>;
  clearGroups: () => void;
  createItem: (description: string, groupId: string) => Promise<Item | null>;
};
