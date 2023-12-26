import React from 'react'

function Controll(props) {
    console.log(props);
    return (
        <div className='form-group'>
            <label className='form-label' htmlFor="">{props.label}</label>
            <input className={props.type == "checkbox" ? "form-checkbox" : "form-control"} type={props.type} placeholder={props.label} />
        </div>
    )
}

export default Controll