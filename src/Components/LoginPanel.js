import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


const LoginPanel = (props) => {
    const [loginUser, setloginUser] = useState("")
    const [loginPass, setloginPass] = useState("")
    let navigate = useNavigate()

    let handleLogin = () => {
        let StoredUser = localStorage.getItem('RegisterUserName')
        let StoredPass = localStorage.getItem('RegisterPassword')
        if (StoredUser && StoredUser.length !== 0 && StoredPass && StoredPass.length !== 0) {
            StoredUser = StoredUser.replace(/"/g, '');
            StoredPass = StoredPass.replace(/"/g, '');
          }
 
        if (StoredUser === loginUser && StoredPass === loginPass) {
            navigate('/AddBook')
            props.checklogin(true)
        }
        else{
            alert('User Not Found Please Register First')
            navigate('/Register')
        }
    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput labelClass="labelColor" autoComplete="new-password" onChange={(e) => setloginUser(e.target.value)} wrapperClass='mb-4' label='User Name' id='form1' type='text' />
            
            <MDBInput labelClass="labelColor" autoComplete="new-password" onChange={(e) => setloginPass(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='text' />

            <MDBBtn onClick={handleLogin} style={{ height: '40px' }} className="mb-4">Log in</MDBBtn>

            <div className="text-center">
                <p className='labelColor'>Not a member? <Link to="/Register">Register</Link></p>
            </div>
        </MDBContainer>
    )
}

export default LoginPanel