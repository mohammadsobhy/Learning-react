import "./App.css";

import Button from "react-bootstrap/Button";

function App() {
	return (
		<div className="container d-flex flex-column gap-4 align-items-center justify-content-center min-vh-100">
			<h1>Hello World !!!</h1>
			<div className="d-flex flex-row gap-2">
				<Button variant="primary">INCREMENT +</Button>{" "}
				<Button variant="success">RESET</Button>{" "}
				<Button variant="danger">DECREMENT -</Button>{" "}
			</div>
		</div>
	);
}

export default App;
