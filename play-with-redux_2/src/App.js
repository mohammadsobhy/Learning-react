import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
	const counter = useSelector((state) => state.counterReducer.counter);
	const toggle = useSelector((state) => state.toggleReducer.toggleCounter);
	const myInput = useSelector((state) => state.InputReducer.myInput);

	const dispatch = useDispatch();

	const changeMyInputValue = (e) => {
		dispatch({ type: "CHANGE_INPUT_VALUE", payload: e.target.value });
	};

	return (
		<>
			<div className="container parent-div ">
				<h1 className="p-3 m-5">REDUX COURSE</h1>
				{toggle ? (
					<>
						<h2>Counter: {counter}</h2>
						<div className="d-flex gap-2 bg-light m-5">
							<button
								className="btn btn-primary"
								onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
							>
								INCREMENT +
							</button>
							<button
								className="btn btn-info"
								onClick={() => dispatch({ type: "RESET", payload: 0 })}
							>
								RESET
							</button>
							<button
								className="btn btn-primary"
								onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}
							>
								DECREMENT -
							</button>
						</div>
					</>
				) : (
					"Nothing to show"
				)}

				<button
					className="btn btn-danger"
					onClick={() => dispatch({ type: "SHOW" })}
				>
					HIDE / SHOW COUNTER
				</button>
				<div className="text-center p-3 m-5">
					<h3>{myInput} </h3>
					<input value={myInput} onChange={changeMyInputValue} />
				</div>
			</div>
		</>
	);
}

export default App;
