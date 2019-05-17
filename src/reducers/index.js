export default (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        locale: {
          language: action.language,
        }
      };

    default:
      return state;
  }
};