const { Lend } = require('../models/Lend');
const { Book } = require('../models/Book');

const getAll = async (req, res) => {
  try {
    const data = await Lend.findAll();
    
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
    const { code } = req.params
    const data = await Lend.findOne({
        where: {
          code
        }
    });

    res.status(200).json({
        "data": data
    });
  } catch (err) {

  }
}

const getAllBooksByLendCode= async (req, res) => {
  try{
    const { code } = req.params;
    
    const data = await Lend.findOne({
      where: {
        code
      },
      include: Book
    });

    res.status(200).json({
      "total": data.length,
      "data": data
    });
  } catch(err) {
    console.log(err)
  }
}

const create = async (req, res) => {
  try {
    const lend = req.body;
    const data = await Lend.create(lend);

    const { code } = data;
    
    const findDataIfExists = await Lend.findOne({
      where: {
        code
      }
    });

    // if data isn't null means lend exists
    if(findDataIfExists !== null) {
      res.status(201).json({
        "message": "Lend created sucessfully",
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
    const { code } = req.params;
    const lend = req.body;
    const data = await Lend.update(lend, {
      where: {
        code
      }
    });

    const findDataIfExists = await Lend.findOne({
      where: {
        code
      }
    })

    // if data isn't null means Lend exists
    if(findDataIfExists !== null) {
      res.status(201).json({
        "message": "Lend updated sucessfully",
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
    const { code } = req.params;
    const data = await Lend.destroy({
      where: {
        code
      }
    });

    const findDataIfExists = await Lend.findOne({
      where: {
        code
      }
    });
    
    // if data is null means Lend was deleted
    if(findDataIfExists === null) {
      res.status(200).send({
        message: "Lend deleted sucessfully"
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
  getAllBooksByLendCode,
  create,
  update,
  destroy
}