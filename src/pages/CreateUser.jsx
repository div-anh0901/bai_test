import React, { useState } from 'react'
import '../assect/form.css';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

import { User } from "../data";
const initalState = {
    name: "",
    email: "",
    address: "",
    phone_number: ""
};


function CreateUser() {

    const [user, setUser] = useState(initalState);
    const navigate = useNavigate();
    const { name, email, address, phone_number } = user;
    const [capcha, setCapCha] = useState(false);
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    function onChange(value) {
        setCapCha(true);
        console.log("Captcha value:", value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (capcha === false) {
            alert("Hãy xác nhận bạn ko phải máy");
            return;
        }
        if (name === "" || email === "" || address === "" || phone_number === "") {
            alert("Phải điền hết các trường");
            return;
        }

        User.push(user);
        alert("success");
        navigate("/")
    };

    return (
        <div className="form-page">
            <div className="f-center">
                <h2>Example</h2>
                <div className="form-groups">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={address}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone_number">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone_number"
                                value={phone_number}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group">
                            <ReCAPTCHA
                                sitekey='6Ldr-OofAAAAAA4eNqMf1-fynAQP4Oqg5g58EiqN'
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser