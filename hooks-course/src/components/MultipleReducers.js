import React from "react";
import { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";

const myNewState = {
	firstCount: 0,
	myInput: "",
	posts: [],
};

const myNewReducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return myNewState.firstCount;

		default:
			return state;
	}
};

const myInputReducer = (state, action) => {
	switch (action.type) {
		case "ChangeValue":
			return {
				...state,
				myInput: action.payload,
			};

		default:
			return state.myInput;
	}
};

const postsReducer = (state, action) => {
	switch (action.type) {
		case "SET_POSTS":
			return action.payload;
		default:
			return state;
	}
};

function MultipleReducers() {
	const [count, dispatch] = useReducer(myNewReducer, myNewState.firstCount);
	const [inputState, dispatchTwo] = useReducer(
		myInputReducer,
		myNewState.myInput
	);
	const [posts, dispatchThree] = useReducer(postsReducer, myNewState.posts);
	useEffect(() => {
		const myUrl = "https://api.slingacademy.com/v1/sample-data/blog-posts/";
		axios
			.get(myUrl)
			.then((res) => {
				const myPosts = res.data.blogs;
				dispatchThree({ type: "SET_POSTS", payload: myPosts });
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleChange = (e) => {
		dispatchTwo({ type: "ChangeValue", payload: e.target.value });
	};
	return (
		<div>
			<h2>{count}</h2>
			<div>
				<button onClick={() => dispatch("increment")}>+</button>
				<button onClick={() => dispatch("reset")}>
					{myNewState.firstCount}
				</button>
				<button onClick={() => dispatch("decrement")}>-</button>
			</div>
			<div>
				<>
					<input
						type="text"
						value={inputState.myInput}
						onChange={handleChange}
					/>
					<p>You typed: {inputState.myInput}</p>
				</>
				<h2>{myNewState.myInput}</h2>
			</div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<div>
							<h3>{post.title}</h3>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MultipleReducers;
