import { createContext, FC, useContext } from "react";

import { useUIFacade } from '../facades/useUIFacade';
import { ItemsState } from './context.types';
import { useAuthFacade } from '../facades/useAuthFacade';

const ItemsContext = createContext({} as ItemsState);

interface Props {
  children: React.ReactNode;
}

export const ItemsContextProvider: FC<Props> = ({ children }) => {
  const uiContext = useUIFacade();
  const authContext = useAuthFacade(uiContext);

  const context = {
    ...uiContext,
    ...authContext,
  };

  return (
    <ItemsContext.Provider value={context}>
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
