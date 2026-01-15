import express from "express";
import os from "os";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "hello nginx",
        hostname: os.hostname(),
    });
});

app.listen(PORT, () => {
    console.log("app listen on port ", PORT);
});
