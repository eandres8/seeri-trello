import { createContext, FC, useContext } from "react";

const ItemsContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const ItemsContextProvider: FC<Props> = ({ children }) => {
  return (
    <ItemsContext.Provider value={{}}>
      {children}
    </ItemsContext.Provider>
  );
}

export const useItemContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("ItemsContext not was provided");
  }

  return context;
};
