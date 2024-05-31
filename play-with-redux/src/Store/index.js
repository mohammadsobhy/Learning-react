import { legacy_createStore as createStore } from "redux";
import { CounterReducer } from "./CounterReducer";

export const store = createStore(
	CounterReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
