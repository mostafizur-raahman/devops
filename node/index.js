import express from "express";

const app = express();

const port = 8080;

app.get("/", (req, res) => {
    return res.json({
        message: "Hello Docker",
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
