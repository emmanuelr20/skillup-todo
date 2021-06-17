import React from 'react'
import Card from '../../components/utils/Card'
import Input from '../../components/utils/Input'
import Button from '../../components/utils/Button'

export default function Register() {


    return (
        <Card title="Register">
            <Input label="Name" placeholder="Name" type="text" />
            <Input label="Email" placeholder="Email" type="email" />
            <Input label="Password" placeholder="password" type="password" />

            <Button>Submit</Button>
        </Card>
    )
}
