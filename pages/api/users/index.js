/* eslint-disable import/no-anonymous-default-export */
import db from "../../../utils/firebase-db";

export default async (req, res) => {
    try {
        const { slug } = req.body;
        const users = await db.collection("users").get();
        const usersData = users.docs.map((user) => user.data());

        const { id } = await db.collection("users").add({
            ...req.body,
            created: new Date().toISOString(),
        });
        console.log("after adding the user");
        res.status(200).json({ id });
    } catch (e) {
        res.status(400).end();
    }
};
