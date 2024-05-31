import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	const myCounterState = useSelector((state) => state.value);
	const myToggleState = useSelector((state) => state.toggleShow);
	const myInputState = useSelector((state) => state.myInput);

	const myToggleFn = () => {
		dispatch({ type: "ShowToggle" });
	};

	const changeMyInputfn = (e) => {
		dispatch({ type: "CHANGE_INPUT", payload: e.target.value });
	};

	return (
		<>
			<div className="container parent-div ">
				<h1 className="p-3 m-5">REDUX COURSE</h1>

				{myToggleState ? (
					<>
						<h2>Counter : {myCounterState}</h2>
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
					<h2>Counter is hidden</h2>
				)}

				<button className="btn btn-danger" onClick={myToggleFn}>
					HIDE / SHOW COUNTER
				</button>
				<div className="my-3">
					<h2>{myInputState}</h2>
					<input type="text" value={myInputState} onChange={changeMyInputfn} />
				</div>
			</div>
		</>
	);
}

export default App;
