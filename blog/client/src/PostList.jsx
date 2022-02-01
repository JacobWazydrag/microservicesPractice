import { useState, useEffect } from 'react';
import axios from 'axios';

export const PostList = () => {
    const [posts, getPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:8080/posts');

        getPosts(res.data);
    };

    const renderPosts = Object.values(posts).map((post) => {
        return (
            <div
                key={post.id}
                className='card'
                style={{ width: '30%', marginBottom: '20px' }}
            >
                <div className='card-body'>
                    <h3>{post.title}</h3>
                </div>
            </div>
        );
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderPosts}
        </div>
    );
};