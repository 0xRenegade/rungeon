import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../utils/firebase-auth";
import axios from "axios";

export default function Dashboard() {
    const { authUser, loading, signOut } = useAuth();
    const [users, setUsers] = useState(null);
    const router = useRouter();

    // Todo get user information from database instead of authUser.

    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!loading && !authUser) {
            router.push("/");
        }
        axios.get("/api/list-users").then((res) => {
            setUsers(res.data.usersData);
            console.log(users);
        });
    }, [authUser, loading]);

    return (
        <div>
            <div>
                List of users: <br />
            </div>
            <ul>
                {users &&
                    users.map((user, i) => {
                        return <li key={i}>{user.email}</li>;
                    })}
            </ul>
            <div className="test">
                Logged in:
                <button
                    type="button"
                    onClick={signOut}
                    className="btn btn-temporary"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}
