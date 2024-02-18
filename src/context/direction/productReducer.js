const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTION":
      return {
        ...state,
        production: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
