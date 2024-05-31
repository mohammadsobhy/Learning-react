import { useState, useEffect } from "react";
import axios from "axios";

function ListPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const myUrl = "https://api.slingacademy.com/v1/sample-data/blog-posts/";
		axios
			.get(myUrl)
			.then((res) => {
				const myPosts = res.data.blogs;
				setPosts(myPosts);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [posts]);

	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<div>
							<img src={post.photo_url} alt={post.title} />
						</div>
						<div>
							<h3>{post.title}</h3>
							<p>{post.content_html}</p>
							<div dangerouslySetInnerHTML={{ __html: post.content_html }} />
							<a href={post.title}>More Details</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListPosts;
