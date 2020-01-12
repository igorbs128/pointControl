import { ADD_TO_USER, ADD_TEMP_USER, ADD_TO_DATE, ADD_TEMP_DATE } from "../actions";

const initialState = {
  cadUser: "",
  user: [{ id: 0, name: "Igor barbosa Santos", company: "Inflor" }],
  registreDate: [],
  data: []
};
export const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_USER:
      return {
        ...state,
        cadUser: action.cadUser,
        user: [
          ...state.user,
          { id: action.id, name: action.name, company: action.compay }
        ]
      };

    case ADD_TEMP_USER:
      return { ...state, cadUser: action.cadUser };

    case ADD_TEMP_DATE:
      return {
        ...state,
        registreDate: [
          ...state.registreDate,
          {
            name: action.name,
            register: action.register,
            date: action.date,
            hour: action.hour
          }
        ]
      };

    

    default:
      return state;
  }
};
