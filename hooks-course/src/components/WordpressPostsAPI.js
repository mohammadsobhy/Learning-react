import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const WordpressPostsAPI = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const myUrl = "https://daambh.com/wp-json/wp/v2/posts/";
		axios
			.get(myUrl)
			.then((res) => {
				const myPosts = res.data;
				setPosts(myPosts);
				// console.log(myPosts);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.guid.rendered}>
						<div>
							<image src={post.featured_media} />
							<h3>{post.title.rendered}</h3>
							<p>{post.author}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WordpressPostsAPI;
