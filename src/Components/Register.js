import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
}
    from 'mdb-react-ui-kit';
import {  useNavigate } from 'react-router-dom';
const Register = () => {
    let navigate = useNavigate()
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const handleRegister = () => {
        localStorage.setItem('RegisterUserName' , JSON.stringify(userName))
        localStorage.setItem('RegisterPassword' , JSON.stringify(password))
        setuserName("")
        setpassword("") 
        navigate('/LoginPanel') 
    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <form>
                <MDBInput labelClass="labelColor" autoComplete="new-password" onChange={(e) => setuserName(e.target.value)} wrapperClass='mb-4' label='Enter User Name' id='form1' type='text' />
                <MDBInput labelClass="labelColor" autoComplete="new-password" onChange={(e) => setpassword(e.target.value)} wrapperClass='mb-4' label='Enter Password' id='form2' type='text' />
            </form>
            <MDBBtn onClick={handleRegister} style={{height: '40px'}} className="mb-4">Register Here</MDBBtn>

        </MDBContainer>
    )
}

export default Register