import React, { useState } from 'react'
import AlertSucess from './Alert/AlertSucess'
import AlertDanger from './Alert/AlertDanger'

function TwoWayBindingFormSubmit() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [issuccess, setIsSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (email === "khoa@gmail.com" && password === "12345678") {
            setIsSuccess(true)
        } else {
            setIsSuccess(false)
        }
        setShowAlert(true)
        // console.log({
        //     email,
        //     password
        // });
    }
    const handleGetAccount = () => {
        setEmail("khoa@gmail.com")
        setPassword("12345678")
    }
    // if (showAlert && issuccess) {
    //     return (
    //         <div className="alert alert-success" role="alert">
    //             A simple success alert—check it out!
    //         </div>
    //     )
    // }
    // if (showAlert && !issuccess) {
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             A simple success alert—check it out!
    //         </div>
    //     )
    // }

    console.log(email);
    console.log(password);
    return (
        <div onSubmit={handleSubmitLogin}>
            <h1>Login</h1>
            {issuccess && <AlertSucess showAlert={showAlert} setShowAlert={setShowAlert} />
                || !issuccess && <AlertDanger showAlert={showAlert} setShowAlert={setShowAlert} />
            }
            <form action="">
                <div className='form-group mb-3'>
                    <label htmlFor="" className='form-label'>Email</label>
                    <input value={email} required type="email" className='form-control' onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="" className='form-label'>Password</label>
                    <input value={password} minLength={8} required type="password" className='form-control' onInput={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-dark me-3'
                    >Login</button>
                    <button type='button' className='btn btn-warning'
                        onClick={handleGetAccount}
                    >Get Account</button>
                </div>
            </form>
        </div >
    )
}

export default TwoWayBindingFormSubmit