import { ADD_TO_USER, ADD_TEMP_USER } from "../actions";

const initialState = {
  cadUser: "",
  user: [
    { id: 0, name: "Igor barbosa Santos", company: "Inflor" }
  ],
  //data: [id, userid, name, day, enter, enter_lunch, exit_lunch, exit]

}
export const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_USER:
      return {
        ...state,
        cadUser: action.cadUser,
        user: [...state.user, { id: action.id, name: action.name, company: action.compay }],
      };

    case ADD_TEMP_USER:
      return { ...state, cadUser: action.cadUser }

    default:
      return state;
  }
}
