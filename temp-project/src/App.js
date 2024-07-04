import "./App.css";

function App() {
	return (
		<div className="container ">
			<h1>Hooks Training</h1>
			<div class="row justify-content-center align-items-center g-3 my-5 ">
				<div className="col border border-dark p-2">
					<div className="counterWrapper">
						<h2 className="my-2">My Counter is : </h2>
						<div className="buttonsWrapper">
							<button className="btn btn-primary border border-dark">
								INCREASE +1
							</button>
							<button className="btn btn-light border border-dark">
								RESET (0)
							</button>
							<button className="btn btn-danger border border-dark">
								DECREASE +2
							</button>
						</div>
					</div>
				</div>
				<div className="col border border-dark p-2">
					<div className="counterWrapper">
						<h3>Binding The Input : </h3>

						<input />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
