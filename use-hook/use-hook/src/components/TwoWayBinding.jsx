import React, { useState } from 'react'

function TwoWayBinding() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleLogin = () => {
        console.log({
            email,
            password
        });
    }
    console.log(email);
    console.log(password);
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <div className='form-group mb-3'>
                    <label htmlFor="" className='form-label'>Email</label>
                    <input required type="text" className='form-control' onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Password</label>
                    <input type="password" className='form-control' onInput={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <button type='button' className='btn btn-dark'
                        onClick={handleLogin}
                    >Login</button>
                </div>
            </form>
        </div>
    )
}

export default TwoWayBinding