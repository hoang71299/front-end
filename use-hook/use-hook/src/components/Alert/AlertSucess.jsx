import React from 'react'

export default function AlertSucess(props) {
    const { showAlert, setShowAlert } = props
    return (
        showAlert && (<div className="alert alert-success d-flex justify-content-between" role="alert">
            A simple success alert—check it out!
            <span role='button' className='text-dark fs-5 fw-bolder' onClick={() => setShowAlert(false)}>&times;</span>
        </div>)
    )
}
