import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        const userObject = jwt_decode(response.credential);
        localStorage.setItem('user', JSON.stringify(userObject));
        const { name, sub, picture } = userObject;
        setUser(prev => {
            return {
                ...prev,
                name,
                sub,
                picture
            }
        })
        navigate("/home")
    }

    const handleOnFailure = () => {
        console.log("login failed")
    }

    return (
        <div className="login-container">
            <GoogleOAuthProvider
                clientId={`971212723502-f4f6mfqba4ju7mn6ep0u7ent039isef6.apps.googleusercontent.com`}
            >
                <GoogleLogin
                    render={(renderProps) => (
                        <button
                            type="button"
                            className="google-button-container"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <FcGoogle className="" /> Sign in with google
                        </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={handleOnFailure}
                    cookiePolicy="single_host_origin"
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default Login