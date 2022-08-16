import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { useAuth } from "../utils/firebase-auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const router = useRouter();
    const [error, setError] = useState(null);

    const { createUserWithEmailAndPassword } = useAuth();

    const onSubmit = (event) => {
        setError(null);
        //check if passwords match. If they do, create user in Firebase
        // and redirect to your logged in page.
        if (passwordOne === passwordTwo)
            createUserWithEmailAndPassword(email, passwordOne)
                .then((authUser) => {
                    console.log("Success. The user is created in Firebase");
                    // Here we'll access the database
                    // to create a user for the new firebase user
                    axios.post("/api/users", { email: email });
                    console.log("console log in signup.jsx after axios call");
                    router.push("/dashboard");
                })
                .catch((error) => {
                    // An error occurred. Set error message to be displayed to user
                    setError(error.message);
                });
        else setError("Passwords do not match");
        event.preventDefault();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="custom-form" onSubmit={onSubmit}>
                        {error && <div className="danger">{error}</div>}
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label htmlFor="signUpEmail">Email</label>
                            </div>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    name="email"
                                    id="signUpEmail"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label htmlFor="signUpPassword">Password</label>
                            </div>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    name="passwordOne"
                                    value={passwordOne}
                                    onChange={(event) => {
                                        setPasswordOne(event.target.value);
                                    }}
                                    id="signUpPassword"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label htmlFor="signUpPassword2"></label>
                            </div>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    name="password"
                                    value={passwordTwo}
                                    onChange={(event) => {
                                        setPasswordTwo(event.target.value);
                                    }}
                                    id="signUpPassword2"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <button className="btn btn-default">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
