export default (state = {}, action) => {
    if (/^\w+$/.test(action.payload)){
        if (action.length > 0 && action.length < 11){
            return {
                disabled: false,
                error: 'You can click the button now'
            }
        } else {
            return {
                disabled: true,
                error: 'Please enter a value that contains between 1 and 10 symbols'
            }
        }
    } else {
        return {
            disabled: true,
            error: 'Please only use alphanumeric symbols'
        }
    }
}