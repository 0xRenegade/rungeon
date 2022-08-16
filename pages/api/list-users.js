/* eslint-disable import/no-anonymous-default-export */
import db from "../../utils/firebase-db";

export default async (req, res) => {
    try {
        const users = await db.collection("users").orderBy("created").get();
        const usersData = users.docs.map((user) => ({
            id: user.id,
            email: user.email,
            ...user.data(),
        }));
        res.status(200).json({ usersData });
    } catch (e) {
        res.status(400).end();
    }
};
