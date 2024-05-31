import "./App.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function App() {
	return (
		<div className="container d-flex gap-2 text-center mt-5 mb-5 ">
			<h1 className="p-2">Redux Toolkit Basics</h1>
			<h2>
				THE COUNT IS : <span className="p-2">0</span>
			</h2>
			<ButtonGroup aria-label="Basic example" className="gap-2">
				<Button variant="primary" className="rounded-0">
					INCREMENT +
				</Button>
				<Button variant="danger" className="rounded-0">
					RESET
				</Button>
				<Button variant="secondary" className="rounded-0">
					DECREMENT -
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default App;
