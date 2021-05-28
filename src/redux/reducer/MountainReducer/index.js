const initialState = {
  allDataEmployee: [],
};

const MountainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-DATA-EMPLOYEE':
      return {
        ...state,
        allDataEmployee: action.payload,
      };
    default:
      return state;
  }
};
console.log('initialstate', initialState.allDataUser);

export default MountainReducer;
