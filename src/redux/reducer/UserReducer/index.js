const initialState = {
  allDataUser: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-DATA-PROFILE':
      return {
        ...state,
        allDataUser: action.payload,
      };
    case 'UPDATE-DATA-PROFILE':
      return {
        ...state,
        allDataUser: {
          ...state.allDataUser,
          Full_Name: action.payload.Full_Name,
          Username: action.payload.Username,
          Phone: action.payload.Phone,
          Email: action.payload.Email,
        },
      };
    case 'UPDATE-DATA':
      return {
        ...state,
        allDataUser: action.payload,
      };
    case 'UPDATE-DATA-COMPANY':
      return {
        ...state,
        allDataUser: {
          ...state.allDataUser,
          Organization: action.payload.Organization,
          Title: action.payload.Title,
          Telephone_Organization: action.payload.Telephone_Organization,
          Address_Organization: action.payload.Address_Organization,
        },
      };
    case 'UPDATE-ONLINE-USER':
      return {
        ...state,
        allDataUser: {
          ...state.allDataUser,
          isOnline: action.payload,
        },
      };
    default:
      return state;
  }
};
export default UserReducer;
