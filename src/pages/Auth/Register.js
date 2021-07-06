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
    const [errors, setErrors] = useState(null);

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

            if (response.status !== 200) {
                console.log(data);
                Alert.danger(data.message);
                if (data.errors) setErrors(data.errors)
                return;
            }

            // store in the case of a refresh or for future use
            localStorage.setItem("user-authentication", JSON.stringify(data));

            //TODO global state or context;
            console.log(data);
        } catch (error) {
            console.log(error);
            Alert.danger(error.message);
        }

    }

    return (
        <Card title="Register">
            <form onSubmit={register}>
                <Input error={errors && errors.name && errors.name[0]} onChange={handleChange} name="name" label="Name" placeholder="Name" type="text" />
                <Input error={errors && errors.email && errors.email[0]} onChange={handleChange} name="email" label="Email" placeholder="Email" type="email" />
                <Input error={errors && errors.password && errors.password[0]} onChange={handleChange} name="password" label="Password" placeholder="password" type="password" />
                <Input onChange={handleChange} name="password_confirmation" label="Confirm Password " placeholder="password" type="password" />

                <Button type="submit">Submit</Button>
            </form>
        </Card>
    )
}
