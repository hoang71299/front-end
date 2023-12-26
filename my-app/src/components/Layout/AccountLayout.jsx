import React from 'react'
import Footer from './Footer'

function AccountLayout(props) {
    return (
        <>
            {props.children}
            <Footer></Footer>
        </>
    )
}

export default AccountLayout