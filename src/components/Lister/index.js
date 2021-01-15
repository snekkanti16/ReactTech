import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post'
import CreatePost from './CreatePost';

const Lister = () => {

	const [loading, setLoading] = useState(true);
	const [allPosts, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then(data => {
			setLoading(false);
			setPosts(data);
		});
	}, []);

	

	const onDeletePost = (id) => {
		let updatedPosts = [...allPosts];
		updatedPosts = updatedPosts.filter(post => post.id !== id);
		setPosts(updatedPosts);
	}

	const onCreatePost = post => {
		let updatedPosts = [...allPosts];
		let idVal = updatedPosts.length === 0 ? 1 : updatedPosts[updatedPosts.length-1].id + 1;
		updatedPosts.push({id: idVal, ...post});
		setPosts(updatedPosts);
	}
	const loadingMessage = loading  ? "Loading..." : "";
	let postCmp = [];
		if(allPosts.length === 0){
			postCmp.push(<p key="p1">No posts available...</p>);
		} else {
			postCmp.push(allPosts.map((post) => {
				return (<Post key={post.id} title={post.title} body={post.body} author={post.author} onDelete={() => onDeletePost(post.id)}/>);
			}));			
		}
		postCmp.push(<CreatePost key="cp1" onCreate={onCreatePost}/>);
	
	return (<div>
			<span>{loadingMessage}</span>
			{postCmp}
	</div>)

};

export default Lister;