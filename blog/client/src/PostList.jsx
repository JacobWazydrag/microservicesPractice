import { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';

export const PostList = () => {
    const [posts, getPosts] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:8080/posts');

            getPosts(res.data);
        };
        fetchPosts();
    }, [posts]);

    const renderPosts = Object.values(posts).map(post => {
        return (
            <div key={post.id} className="card" style={{ width: '30%', marginBottom: '20px' }}>
                <div className="card-body">
                    <h3>
                        {post.title}
                    </h3>
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPosts}
        </div>
    );
};
