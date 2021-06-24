import React, { useState } from 'react'
import Card from '../../components/utils/Card'
import Input from '../../components/utils/Input'
import Button from '../../components/utils/Button'


import Alert from '../../utils/Alert'
import config from '../../config'

export default function Register() {

    const defaultState = {
        email: "",
        password: "",
        name: "",
        password_confirmation: "",
    }

    const [formData, setFormData] = useState(defaultState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        formData[name] = value;
        setFormData({ ...formData });
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(`${config.baseUrl}register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            let data = await response.json();

            // store in the case of a refresh or for future use
            localStorage.setItem("user-authentication", JSON.stringify(data));

            //TODO global state or context;

            console.log(data);
        } catch (error) {
            console.log(error);
            Alert.error(error.message);
        }

    }

    return (
        <Card title="Register">
            <form onSubmit={register}>
                <Input onChange={handleChange} name="name" label="Name" placeholder="Name" type="text" />
                <Input onChange={handleChange} name="email" label="Email" placeholder="Email" type="email" />
                <Input onChange={handleChange} name="password" label="Password" placeholder="password" type="password" />
                <Input onChange={handleChange} name="password_confirmation" label="Confirm Password " placeholder="password" type="password" />

                <Button type="submit">Submit</Button>
            </form>
        </Card>
    )
}
