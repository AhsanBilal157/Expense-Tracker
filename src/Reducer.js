import React from 'react';
const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state]
        case 'Delete_Transaction':
            return {...state,
                transaction:state.transaction.filter(transaction=> transaction.id !==action.payload)
            }
        default:
            return state;
    };
}
export default transactionReducer;