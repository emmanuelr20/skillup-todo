import React, { useState, useContext } from 'react'
import Modal from '../../utils/Modal'
import config from '../../../config';
import Alert from '../../../utils/Alert';
import HeaderContext from '../../../contexts/HeaderContext';

export default function CreateTodo({ show, addTodo }) {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const headerData = useContext(HeaderContext);

    console.log(headerData);

    const saveTodo = () => {
        // a quick validatio
        if(!title || !priority) {
            setError("please set title and priority");
            return;
        }
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
            setTitle("");
            setPriority("");
            setDescription("");

            Alert.success("Todo saved successfully !");
        })
        .catch(err => {
            console.err(err);
            setLoading(false);
            Alert.danger("An error occurred, please try again !");
        })
    }


    return (
        <Modal
            title={`Create Todo ${headerData.currView}`}
            actionText="Create"
            closeText="Close"
            action={saveTodo}
            close={() => show(false)}
            loading={loading}
        >
            {error && <p style={{ color: "red", backgroundColor: "pink",  padding: "20px" }}>{error}</p>}
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="Title" 
                className="input" 
                type="text" 
            />
            <input value={priority} onChange={e => setPriority(e.target.value)} placeholder="Priority" className="input" type="number" min="0" step="1" />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" rows="4" className="input"></textarea>
        </Modal>
    )
}
