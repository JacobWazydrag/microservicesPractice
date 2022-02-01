import { useState } from 'react';
import axios from 'axios';

export const PostCreate = () => {
    const [title, setTitle] = useState('');

    const inputTitle = (value) => {
        setTitle(value);
    };

    const submit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:8080/posts', {
            title,
        });

        setTitle('');
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input
                        className='form-control'
                        value={title}
                        onChange={(e) => inputTitle(e.target.value)}
                    ></input>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};
