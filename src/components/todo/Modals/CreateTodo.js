import React, { useState } from 'react'
import Modal from '../../utils/Modal'
import config from '../../../config';

export default function CreateTodo({ show, addTodo }) {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const saveTodo = () => {
        //set loading true
        setLoading(true);
        fetch(
            `${config.baseUrl}todo`,
            { 
                method: "POST",
                body: JSON.stringify({
                    title, 
                    priority, 
                    description, 
                    done: false,
                })
            },
        ).then(res => res.json())
        .then(res => {
            // save the return todo to the list of TodoList
            addTodo(res);

            //set loading false
            setLoading(false);

            //close the modal
            show(false);
        })
        .catch(err => {
            console.err(err);
            alert("an error occurred, please try again");
            setLoading(false);
        })
    }

    return (
        <Modal
            title="Create Todo"
            actionText="Create"
            closeText="Close"
            action={saveTodo}
            close={() => show(false)}
            loading={loading}
        >
           
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="input" type="text" />
            <input value={priority} onChange={e => setPriority(e.target.value)} placeholder="Priority" className="input" type="number" min="0" step="1" />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" rows="4" className="input"></textarea>

        </Modal>
    )
}
