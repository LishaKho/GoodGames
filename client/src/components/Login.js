import React, { useState} from 'react';
import { navigate } from '@reach/router';


const Login = (props) => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        navigate("/games/")
    }


    return (

        <div className="vh-100" style={{backgroundColor: "#e2d9f3"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        <label className="form-label" for="typeEmailX">Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                    <label className="form-label" for="typePasswordX">Password</label>
                                </div>

                            <button onSubmit={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Login
