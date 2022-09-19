const CorporateModeReducer = (state, action) => {
    switch (action.type) {
      case "LIGHT": {
        return {
          corporateMode: false,
        };
      }
      case "CORPORATE": {
        return {
          corporateMode: true,
        };
      }
      case "TOGGLE1": {
        return {
          corporateMode: !state.corporateMode,
        };
      }
      default:
        return state;
    }
  };
  
  export default CorporateModeReducer;