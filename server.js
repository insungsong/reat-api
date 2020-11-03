import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

//서버에서 요청해준 내용을 읽을 수 있게 허락해준다.
app.use(bodyParser.json());

//db를 대신함
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

app.get("/api/user/:id", (req, res) => {
    const user = users.find((value) => {
        return value.id === req.params.id;
    });

    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ errorMessage: "User not find" });
    }

})

//postman을 써서 test함
//post는 어떤 데이터들을 get을 통해서는 link에 데이터를 보내는데
app.post("/api/user", (req, res) => {
    users.push(req.body);
    res.json(users);
})


//Update
app.put("/api/user/:id", (req, res) => {
    let foundIndex = users.findIndex(user => user.id === req.params.id);
    if (foundIndex === -1) {
        res.status(404).json({ ErrorMessage: "User is not Found..." });
    } else {
        users[foundIndex] = { ...users[foundIndex], ...req.body };
        res.json(users[foundIndex]);
    }
})

//Delete
app.delete("/api/user/:id", (req, res) => {
    let findIndex = users.findIndex(user => user.id === req.params.id);
    if (findIndex === -1) {
        res.status(404).json({ ErrorMessage: "User is not Found" });
    } else {
        let foundUser = users.splice(findIndex, 1);
        res.json(foundUser[0]);
    }
})

app.listen(PORT, () => {
    console.log("✅ Listening is Server");
})



