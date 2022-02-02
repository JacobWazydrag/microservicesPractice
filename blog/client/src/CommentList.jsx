import { useState, useEffect } from 'react';
import axios from 'axios';

export const CommentList = ({ postId }) => {
    const [comments, getComments] = useState([]);

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:8081/posts/${postId}/comments`);

        getComments(res.data);
    };

    const renderComments = comments.map(comment => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        );
    });

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderComments}
        </div>
    );
};
