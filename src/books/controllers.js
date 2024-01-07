const Book = require("./model");

const addBook = async (req, res) => {
    console.log(req.body);
    try {
        const result = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });

        res

        .status(201)
        .json({ message: `${result.title} has been created`, result: result });
    }
    catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const deleteBookByTitle = async (req, res) => {
    try {
      const deletedBook = await Book.destroy({
        where: 
          {
            title: req.body.title,
          },
      });
      return res.status(200).json({ message: "Book is deleted", deletedBook });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getBooks = async (req, res) => {
    try {
      const allBooks = await Book.findAll();
        return res.status(200).json({ message: "All books are here", allBooks });
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getByAuthor = async (req, res) => {
    try {
      const getBook = await Book.findOne({
        where:({author: req.params.author})
      })
      return res.status(200).json({ message: "Book found", getBook: getBook });
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteOneBook = async (req, res) => {
    try {
      const deleteOne = await Book.destroy({
        where:({author: req.params.author})
      })

      return res.status(200).json({ message: "Selected Book deleted"});
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteAllBooks = async (req, res) => {
    try {
      await Book.destroy({
        truncate: true
      });
      
      return res.status(200).json({ message: "All books deleted."});
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const updateBookByTitle = async (req, res) => {
    try {

      // await Book.update({ author: req.body.author, genre: req.body.genre }, {
        await Book.update({...req.body}, {
        where: {
          title: req.body.title,
        },
      });
      
      return res.status(200).json({ message: "the book is updated."});
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    addBook: addBook, 
    deleteBookByTitle,
    getBooks,
    getByAuthor: getByAuthor,
    deleteOneBook: deleteOneBook,
    deleteAllBooks: deleteAllBooks,
    updateBookByTitle,
};