require("dotenv").config();
const express = require("express");

const bookRouter = require("./books/routes");

const port = process.env.PORT || 5001;

const Book = require("./books/model");
const controllers = require("./books/controllers");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"} );
});

const syncTables = () => {
    Book.sync();
};

app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
});