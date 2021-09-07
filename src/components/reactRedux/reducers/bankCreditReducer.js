

const initialState = {
    creditAmount: 0,
    previousPercentage: 0,
    annualPercentage: 0,
    annualTerm: 0,
    calendarYear: 0,
    calendarMonth: ''
};

const creditArray = [];

export const creditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getData':
            return {
                creditAmount: action.data.creditAmount,
                previousPercentage: action.data.previousPercentage,
                annualPercentage: action.data.annualPercentage,
                annualTerm: action.data.annualTerm,
                calendarYear: action.data.calendarYear,
                calendarMonth: action.data.calendarMonth
            };
        case 'calculateCredit':
            return creditArray.push(initialState);


        default:
            return creditArray.push(initialState);


    }

};