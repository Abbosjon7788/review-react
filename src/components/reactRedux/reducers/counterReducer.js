const initialState = {
    number: 0,
};


export const counterReducer = (state = initialState, action) => {
    if (action.type === 'increaseNumber') {
        return {
            number: state.number + 1,
        }
    } else if (action.type === 'decreaseNumber') {
        return {
            number: state.number - 1,
        }
    }

    return state;
};