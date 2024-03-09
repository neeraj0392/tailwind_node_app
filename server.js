const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

const data = [
    {
        id: 1,
        name: "Aman"
    }, {
        id: 2,
        name: "Azeem"
    }
];

app.get("/", (req, res) => {
    res.status(200).send(data);
})

app.listen(port, () => {
    console.log("Server listening on port no " + port);
})
