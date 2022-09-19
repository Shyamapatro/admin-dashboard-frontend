import { createContext, useReducer } from "react";
import CorporateModeReducer from "./CorporateModeReducer";

const INITIAL_STATE = {
  corporateMode: false,
};

export const CorporateModeContext = createContext(INITIAL_STATE);

export const CorporateModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CorporateModeReducer, INITIAL_STATE);

  return (
    <CorporateModeContext.Provider value={{ corporateMode: state.corporateMode, dispatch }}>
      {children}
    </CorporateModeContext.Provider>
  );
};



