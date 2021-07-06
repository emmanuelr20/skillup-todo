import React, { useState } from 'react'
import Card from '../../components/utils/Card'
import Input from '../../components/utils/Input'
import Button from '../../components/utils/Button'

import Alert from '../../utils/Alert'
import config from '../../config'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../../contexts/Prodiver/AppContextProdiver'


export default function Login() {
    const history = useHistory();
    const { login } = useAppContext()

    const defaultState = {
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(defaultState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        formData[name] = value;
        setFormData({ ...formData });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            let response = await fetch(`${config.baseUrl}login`, {
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
                // if (data.errors) setErrors(data.errors)
            } else {
                // store in the case of a refresh or for future use
                localStorage.setItem("user-authentication", JSON.stringify(data));
                Alert.success("Login successful");
                //TODO: global state or context;
                login(data);
                //TODO: rediret todos
                history.push("/todos")
                console.log(data);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            Alert.error(error.message);
            setLoading(false);
        }

    }


    return (
        <Card title="Login">
            <form onSubmit={handleLogin}>
                <Input onChange={handleChange} name="email" label="Email" placeholder="Email" type="email" />
                <Input onChange={handleChange} name="password" label="Password" placeholder="password" type="password" />

                <Button disabled={loading} type="submit">{loading ? "loading..." : "Submit"}</Button>
            </form>
        </Card>
    )
}
