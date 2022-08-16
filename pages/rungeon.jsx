import { useState, useEffect } from "react";
import { Rungeon } from "../components";

export default RungeonPage;

function RungeonPage() {
    const [users, setUsers] = useState(null);
    const currentUser = { ...users }[0];

    useEffect(() => {}, []);

    return <Rungeon user={currentUser} />;
}
