/*
import React, { createContext, useReducer } from "react";
import "./App.css";
import ContextReducer from "./components/ContextReducer";

export const myCount = 0;

export const myNewReducer = (state, action) => {
	switch (action) {
		case "INCREMENT":
			return state + 1;
		case "RESET":
			return state;
		case "DECREMENT":
			return state - 1;

		default:
			return myCount;
	}
};

export const NewCountContext = createContext();

function App() {
	const [myNewcount, dispatch] = useReducer(myNewReducer, myCount);
	return (
		<>
			<div className="app">
				<NewCountContext.Provider value={myNewcount}>
					<h1>Hooks Course</h1>
					<h2>
						<ContextReducer />
					</h2>
					<div>
						<button onClick={() => dispatch("INCREMENT")}>INCREMENT +</button>
						<button onClick={() => dispatch("IRESET")}>{myCount}</button>
						<button onClick={() => dispatch("DECREMENT")}>DECREMENT -</button>
					</div>
				</NewCountContext.Provider>
			</div>
		</>
	);
}

export default App;

 */
