import { AuthFacade } from '../types/auth.types';
import { ItemsFacade } from '../types/items.types';
import { UIFacade } from '../types/ui.types';

export type ItemsState = UIFacade & AuthFacade & ItemsFacade;
