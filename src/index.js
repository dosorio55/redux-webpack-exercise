import { bugAdded, bugResolved } from "./store/bugs";
import store from "./store/configureSteore";

/* suscribe to de store to refresh de UI, it returns a function
to unsuscribe of the store, for when de user moves away from the page, for example */

const unsuscribe = store.subscribe(() => {
    console.log('Store changed', store.getState())
});

store.dispatch(bugAdded({ description: 'bug 1' }));

store.dispatch(bugAdded({ description: 'bug 2' }));

unsuscribe();

store.dispatch(bugResolved({ id: 1 }));

/* GET STORE STATE */
console.log(store.getState())
// console.log(store.getState());