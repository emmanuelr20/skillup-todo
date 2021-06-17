import React from 'react'
import Card from '../../components/utils/Card'
import Input from '../../components/utils/Input'
import Button from '../../components/utils/Button'

export default function Login() {


    return (
        <Card title="Login">
            <Input label="Email" placeholder="Email" type="email" />
            <Input label="Password" placeholder="password" type="password" />

            <Button>Submit</Button>
        </Card>
    )
}
