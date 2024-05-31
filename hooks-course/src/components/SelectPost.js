import axios from "axios";
import { useState, useEffect } from "react";

const SelectPost = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState("");

	const yourUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

	useEffect(() => {
		axios
			.get(yourUrl)
			.then((res) => setPost(res.data))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div>
			<div>
				<input
					type="text"
					value={id}
					onChange={(e) => {
						setId(e.target.value);
					}}
				/>
			</div>
			<div>
				<h3>{post.title}</h3>
			</div>
		</div>
	);
};

export default SelectPost;
