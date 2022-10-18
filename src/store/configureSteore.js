import reducerLT from './bugs'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: reducerLT })

export default store