export type UIState = {
  isLoading: boolean;
};

export type UIActionType =
  | { type: "[UI] START_LOADING" }
  | { type: "[UI] FINISH_LOADING" };

export type UIFacade = {
  uiState: UIState;
  startLoading: () => void;
  finishLoading: () => void;
};
