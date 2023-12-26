import React from 'react'
import Controll from './Controll'
import Paragraph from './Paragraph'
import Button from './Button'

function Form() {
    return (
        <div>
            <form action="">
                <Controll type="text" label='Email' /><br />
                <Controll type="password" label='Password' />
                <Controll type="checkbox" label='Password' />
                <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
                <Button type="button" >Register</Button>
                <Button href="https://google.com">Go to </Button>
            </form>
        </div>
    )
}


export default Form