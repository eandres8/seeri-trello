import { createContext, useContext } from "react";

const ItemsContext = createContext({});

export const useItemContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("ItemsContext not was provided");
  }

  return context;
};
