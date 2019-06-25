export const checkInput = (variable) => dispatch => {
    dispatch({
     type: 'CHECK_INPUT',
     payload: variable,
     length: variable.length
    })
   }