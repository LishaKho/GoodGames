import React, { useState } from 'react';


const Registration = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");


return (
    <div className="mask d-flex align-items-center h-80" style={{backgroundColor: "#e2d9f3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-80">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card" style={{borderRadius: "15px"}}>
        <div className="card-body p-5 text-center">
        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
        <form>
            <div className="form-outline mb-4">
                <label 
                    className="form-label" 
                    htmlFor="firstName">
                        First Name
                </label>
                <input 
                    className="form-control form-control-lg"
                    type="text" 
                    name="firstName"
                    onChange={ (e) => setFirstName(e.target.value) }
                />
            </div>
        
            {
                firstName.length > 0 ?
                    firstName.length < 2 ?
                    <p className="error">First Name must be at least 2 characters</p>
                    : null
                    : null 
            }
        <div className="form-outline mb-4">
            <label 
                className="form-label"
                htmlFor="lastName">
                    Last Name
            </label>
            <input
                className="form-control form-control-lg"
                type="text" 
                name="lastName" 
                onChange={ (e) => setLastName(e.target.value) }
            />
        </div>
        {
            lastName.length > 0 ?
                lastName.length < 2 ?
                <p className="error">Last Name must be at least 2 characters</p>
                : null
                : null 
        }
        <div className="form-outline mb-4">
            <label 
            className="form-label"
            htmlFor="email">
                Email
            </label>
            <input
                className="form-control form-control-lg"
                type="text" 
                name="email" 
                onChange={ (e) => setEmail(e.target.value) }
            />
        </div>
            {
            email.length > 0 ?
                email.length < 5 ?
                <p className="error">Email must be at least 5 characters</p>
                : null
                : null 
            }
        <div className="form-outline mb-4">
            <label 
                className="form-label"
                htmlFor="password">
                    Password
            </label>
            <input 
                className="form-control form-control-lg"
                type="password" 
                name="password" 
                onChange={ (e) => setPassword(e.target.value) }
            />
        </div>
            {
            password.length > 0 ?
                password.length < 8 ?
                <p className="error">Password must be at least 8 characters</p>
                : null
                : null 
            }
            {
            password.length >= 8 && confirmPassword.length > 0 ?
                password !== confirmPassword ?
                <p className="error">Passwords do not match</p>
                : null
                : null 
            }

        <div className="form-outline mb-4">
            <label 
                className="form-label"
                htmlFor="confirmPassord">
                    Confirm Password
            </label>
            <input 
                className="form-control form-control-lg"
                type="password" 
                name="confirmPassword" 
                onChange={ (e) => setConfirmPassword(e.target.value) }
            />
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary btn-lg btn-block">Register</button>
            </div>
        </form>

        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
)
}

export default Registration;