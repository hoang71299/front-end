import React from 'react'
import Avatar from '../Avatar/Avatar'
const profile = {
    name: "Khoa Nguyen",
    age: 20,
    gender: "Male",
    mobile: "09353929392",
    email: "huynhhoang@gmail.com",
    avatar: "https://static.vecteezy.com/system/resources/previews/024/183/513/original/male-avatar-portrait-of-a-young-brunette-male-illustration-of-male-character-in-modern-color-style-vector.jpg"
}
function Profile() {
    return (
        <section>
            <div className="card mb-3" >
                <div className="row g-0 d-flex justify-content-center ">
                    <div className="col-md-4">
                        <Avatar avatar={profile.avatar} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ">{profile.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Age: <span className='fw-bolder'>{profile.age}</span></li>
                                <li className="list-group-item">Gender: <span className="fw-bolder">{profile.gender}</span></li>
                                <li className="list-group-item">Email: <span className='fw-bolder'>{profile.email}</span></li>
                                <li className="list-group-item">Mobile: <span className='fw-bolder'>{profile.mobile}</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile