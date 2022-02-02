import { useState } from 'react';
import axios from 'axios';

export const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const inputContent = inputValue => {
        setContent(inputValue);
    };

    const submit = async event => {
        event.preventDefault();

        await axios.post(`http://localhost:8081/posts/${postId}/comments`, {
            content
        });

        setContent('');
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} onChange={e => inputContent(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
