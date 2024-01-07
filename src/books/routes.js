const Router = require("express");
const bookRouter = Router();
// const bookFindRouter = Router();

const {addBook, deleteBookByTitle, getBooks, getByAuthor, deleteOneBook, deleteAllBooks} = require("./controllers");

bookRouter.post("/", addBook);
// bookRouter.delete("/", deleteBookByTitle);
bookRouter.get("/", getBooks);
bookRouter.get("/:author", getByAuthor);
bookRouter.delete("/:author", deleteOneBook);
bookRouter.delete("/", deleteAllBooks);
// bookRouter.put("/", updateBookByTitle);
module.exports = bookRouter;