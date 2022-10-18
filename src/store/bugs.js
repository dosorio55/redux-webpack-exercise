import { createAction, createReducer } from "@reduxjs/toolkit";

//Action types
/* const BUG_ADDED = "BUG_ADDED";
const BUG_REMOVED = "BUG_REMOVED";
const BUG_RESOLVED = "BUG_RESOLVED"; */

export const bugAdded = createAction('BUG_ADDED');

export const bugRemoved = createAction('BUG_REMOVED');

export const bugResolved = createAction('BUG_RESOLVED');

console.log(bugResolved(1).payload);
// const bugUpdated = createAction('bugUpdated');

//Reducer
//reducer needs to be exported as default in this method

let idCounter = 0;

/* esto me permite usar mutable code y redux por detrás me genera el unmutable code */
export default createReducer([], {
    // objects actions

    [bugAdded.type]: (state, action) => {
        state.push({
            id: ++idCounter,
            description: action.payload.description,
            resolved: false
        })
    },

    [bugResolved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    }
});

/* const reducer = (state = [], action) => {
    switch (action.type) {
        case BUG_ADDED:
            return [...state,
            {
                id: ++idCounter,
                description: action.payload.description,
                resolved: false
            }];
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVED:
            return state.map(bug =>
                bug.id === action.payload.id ? { ...bug, resolved: true } : bug);
        default:
            return state
    }
};

export default reducer */