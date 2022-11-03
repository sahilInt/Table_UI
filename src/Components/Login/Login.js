import React, { useState } from 'react'
import "./Login.css"
import HandImg from "../../Images/HandImageLoginPg.png"
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [validation, setvalidation] = useState("");
    const [showvalidation, setshowvalidation] = useState("");
    const navigate = useNavigate();

    const onlogin = async (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            return setshowvalidation(true);
        }
        if (username !== username) {
            return setshowvalidation(true);
        }

        navigate("/dashboard")



        await axios.post('API', {
            username: username,
            password: password,
        })
            .then((res) => {
                console.log("res", res);
                const { token } = res.data;
                localStorage.setItem("SavedToken", token)
                console.log(token)
            })
            .catch((err) => {
                console.log("err", err);
            })
    }



    // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    // const users = [{ username: "Jane", password: "testpassword" }];
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const account = users.find((user) => user.username === username);
    //     if (account && account.password === password) {
    //         setauthenticated(true)
    //         localStorage.setItem("authenticated", true);
    //     }
    // };


    return (
        <div className='login-page-flex-div'>
            <div className='login-page-width-div'>
                <div className='login-page-main-div'>

                    <div className='login-page-sub-div-one'>
                        <div className='login-page-sub-one-sec-one'>
                            <h4>obesity tool</h4>
                            <p>by sk pharma</p>
                        </div>
                        <div className='login-page-sub-one-sec-two'>
                            <div className='input-fiend-one'>
                                <input type='text' className='email-input-field-tag' placeholder='Email'
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                />
                            </div>
                            <div className='input-fiend-one'>
                                <input type='password' className='email-input-field-tag' placeholder='Password'
                                value={password}   
                                onChange={(e) => setpassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='login-page-sub-one-sec-three'>
                            <input type='checkbox' />
                            <p>Remember Me</p>
                        </div>
                        <div className='login-page-sub-one-sec-four'>
                            <button onClick={onlogin} className='login-page-login-btn'>Login</button>
                        </div>
                        <div className='login-page-sub-one-sec-five'>
                            <p>Forget Password ?</p>
                        </div>
                    </div>


                    <div className='login-page-sub-div-two'>
                        <img src={HandImg} alt='' className='hand-img-login' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login