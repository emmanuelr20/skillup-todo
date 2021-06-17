import React, { useState } from 'react';

import { Link } from "react-router-dom";

import CreateTodo from '../todo/Modals/CreateTodo';
import Button from '../utils/Button';


export default function Header({ setAllTodos }) {

    const [showCreateModal, setShowCreateModal] = useState(false);

    const isAuthenticated = false;

    return (
        <div>
            <div id="main-header">
                <div className="container main-nav">
                    <h1>Todos </h1>
                    {
                        isAuthenticated ?
                            <span><Button onClick={() => setShowCreateModal(true)}> Add Todo </Button></span> :
                            <span>
                                <Link to="/auth/login">
                                    <Button > Login</Button>
                                </Link>
                                <Link to="/auth/register">
                                    <Button > Register</Button>
                                </Link>
                            </span>
                    }
                </div>
            </div>
            <div style={{ display: showCreateModal ? "block" : "none" }}>
                <CreateTodo
                    show={setShowCreateModal}
                    setAllTodos={setAllTodos}
                />
            </div>
        </div>
    )
}
