import { useState } from "react";
import { NavLink } from "../components";
import { useRouter } from "next/router";

import { useAuth } from "../utils/firebase-auth";

export default Login;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
    const { signInWithEmailAndPassword } = useAuth();

    const onSubmit = (event) => {
        setError(null);
        signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                router.push("/dashboard");
            })
            .catch((error) => {
                setError(error.message);
            });
        event.preventDefault();
    };

    return (
        <div className="container text-center" style={{ padding: "40px 0px" }}>
            <div className="row">
                <div className="col">
                    <h2>Login</h2>
                </div>
            </div>
            <div className="row" style={{ maxWidth: "400px", margin: "auto" }}>
                <div className="col">
                    <form onSubmit={onSubmit}>
                        {error && <div className="danger">{error}</div>}
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label htmlFor="loginEmail">Email</label>
                            </div>

                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                    name="email"
                                    id="loginEmail"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label htmlFor="loginPassword">Password</label>
                            </div>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                    id="loginPassword"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <button className="btn btn-temporary">
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                No account?{" "}
                                <NavLink href="/signup">Create one</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
