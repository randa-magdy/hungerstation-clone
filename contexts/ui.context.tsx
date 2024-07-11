import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

export interface UIState {
  displayModal: boolean;
  modalData?: any;
  modalView: MODAL_VIEWS;
}

const initialState: UIState = {
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  modalData: null,
};

type UIAction =
  | { type: 'OPEN_MODAL'; view: MODAL_VIEWS; data?: MODAL_DATA }
  | { type: 'CLOSE_MODAL' };

export type MODAL_VIEWS = 'SIGNUP_VIEW' | 'LOGIN_VIEW' | 'FORGOT_VIEW' | 'SEARCH_PLACES';
type MODAL_DATA = any;

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        displayModal: true,
        modalView: action.view,
        modalData: action.data,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: false,
        modalData: null,
      };

    default:
      return state;
  }
}

// Create context
const UIStateContext = createContext<UIState>(initialState);

UIStateContext.displayName = 'UIStateContext';

const UIActionsContext = createContext<Dispatch<UIAction> | undefined>(undefined);

UIActionsContext.displayName = 'UIActionsContext';

// UIProvider component
export function UIProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UIStateContext.Provider value={state}>
      <UIActionsContext.Provider value={dispatch}>{children}</UIActionsContext.Provider>
    </UIStateContext.Provider>
  );
}

export function useUIState() {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error(`useUIState must be used within a UIProvider`);
  }
  return context;
}

export function useUIAction() {
  const dispatch = useContext(UIActionsContext);
  if (dispatch === undefined) {
    throw new Error(`useUIAction must be used within a UIProvider`);
  }

  const openModal = (view: MODAL_VIEWS, data?: MODAL_DATA) =>
    dispatch({ type: 'OPEN_MODAL', view, data });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return {
    openModal,
    closeModal,
  };
}
