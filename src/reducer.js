import * as actions from "./actionTypes";

let idCounter = 0;

export const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [...state,
            {
                id: ++idCounter,
                description: action.payload.description,
                resolved: false
            }];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            return state.map(bug =>
                bug.id === action.payload.id ? { ...bug, resolved: true } : bug);
        default:
            return state
    }
}