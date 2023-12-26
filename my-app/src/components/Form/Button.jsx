import React from 'react'

function Button(props) {
    const handleClick = () => {
        console.log("hello");
    }
    if (props.type == "button") {
        return (
            <button type='button' className='btn btn-dark'
                onClick={handleClick}
            >{props.children}</button>
        )
    }
    if (props.href) {
        return (
            <a className='btn btn-link' href={props.href}>{props.children}</a>
        )
    }



}

export default Button