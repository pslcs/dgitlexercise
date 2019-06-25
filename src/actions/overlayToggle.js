export const overlayToggle = () => dispatch => {
    dispatch({
     type: 'OVERLAY_TOGGLE',
     payload: 'toggle'
    })
   }