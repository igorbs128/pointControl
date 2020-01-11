export const ADD_TO_USER = "ADD_TO_USER";
export const ADD_TEMP_USER = "ADD_TEMP_USER";

export const addToCart = user => ({
  type: ADD_TO_USER,
  user
});
export const addTempUser = cadUser => ({
  type: ADD_TEMP_USER,
  cadUser
})


