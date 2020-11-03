import express from "express";

const app = express();

const PORT = 4000;

const users = [
    {
        id: "asndas12",
        name: "Danny",
        email: "song22861@naver.com"
    },
    {
        id: "adjnad12",
        name: "Jenny",
        email: "alskdsa@naver.com"
    }
]

app.get("/api/user", (req, res) => {
    res.json(users);
})

app.listen(PORT, () => {
    console.log("✅ Listening Server!");
})



