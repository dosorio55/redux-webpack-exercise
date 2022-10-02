import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

/**
 * suscribe to de store to refresh de UI, it returns a function
 * to unsuscribe of the store, for when de user moves away from the page, for example
 */
// const unsuscribe = store.subscribe(() => {
//     console.log('Store changed', store.getState())
// });

store.dispatch(bugAdded('bug 1'));

store.dispatch(bugAdded('bug 2'));

// unsuscribe();

store.dispatch(bugResolved(2));

console.log(store.getState())
// console.log(store.getState());