const { Book } = require('../models/Book');

const getAll = async (req, res) => {
  try {
    const data = await Book.findAll();
    
    res.status(200).json({
        "total": data.length,
        "data": data
    });
  }catch (err) {
      console.log(err)
  }
}

const getById = async (req, res) => {
  try {
    const { tracking_code } = req.params
    const data = await Book.findOne({
        where: {
          tracking_code
        }
    });

    res.status(200).json({
        "data": data
    });
  } catch (err) {

  }
}

const create = async (req, res) => {
  try {
    const book = req.body;
    const data = await Book.create(book);
    const { tracking_code } = data;
    
    const findDataIfExists = await Book.findOne({
      where: {
        tracking_code
      }
    });

    // if data isn't null means Book exists
    if(findDataIfExists !== null) {
      res.status(201).json({
        "message": "Book created sucessfully",
        "data": findDataIfExists
      });
    } else {
      res.status(404).json({
        message: "Something is wrong"
      });
    }

  } catch (err) {
      console.log(err)
  }
}

const update = async (req, res) => {
  try {
    const { tracking_code } = req.params;
    const book = req.body;
    const data = await Book.update(book, {
      where: {
        tracking_code
      }
    });

    const findDataIfExists = await Book.findOne({
      where: {
        tracking_code
      }
    })

    // if data isn't null means Book exists
    if(findDataIfExists !== null) {
      res.status(201).json({
        "message": "Book updated sucessfully",
        "data": findDataIfExists
      });
    } else {
      res.status(404).json({
        message: "Something is wrong"
      });
    }
  } catch (err) {
    console.log(err)
  }
}

const destroy = async (req, res) => {
  try {
    const { tracking_code } = req.params;
    const data = await Book.destroy({
      where: {
        tracking_code
      }
    });

    const findDataIfExists = await Book.findOne({
      where: {
        tracking_code
      }
    });
    
    // if data is null means Book was deleted
    if(findDataIfExists === null) {
      res.status(200).send({
        message: "Book deleted sucessfully"
      });
    } else {
      res.status(404).json({
        message: "Something is wrong"
      });
    }

  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}