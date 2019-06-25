export const saveValues = (variable) => dispatch => {
    dispatch({
     type: 'SAVE_VALUES',
     payload: variable
    })
   }