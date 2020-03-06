const { Loan } = require('../models/Loan');
const { Book } = require('../models/Book');

const getAll = async (req, res) => {
  try {
    const data = await Loan.findAll();
    
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
    const data = await Loan.findOne({
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

const getAllBooksByLoanCode= async (req, res) => {
  try{
    const { code } = req.params;
    console.log(code)
    const data = await Loan.findOne({
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
    const loan = req.body;
    const parseLoan = req.body.BookTrackingCode
    const data = await Loan.create(loan);

    const { code } = data;
    
    const findDataIfExists = await Loan.findOne({
      where: {
        code
      }
    });

    // if data isn't null means Loan exists
    if(findDataIfExists !== null) {
      res.status(201).json({
        "message": "Loan created sucessfully",
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
    const loan = req.body;
    const data = await Loan.update(loan, {
      where: {
        code
      }
    });

    const findDataIfExists = await Loan.findOne({
      where: {
        code
      }
    })

    // if data isn't null means Loan exists
    if(findDataIfExists !== null) {
      res.status(201).json({
        "message": "Loan updated sucessfully",
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
    const data = await Loan.destroy({
      where: {
        code
      }
    });

    const findDataIfExists = await Loan.findOne({
      where: {
        code
      }
    });
    
    // if data is null means loan was deleted
    if(findDataIfExists === null) {
      res.status(200).send({
        message: "Loan deleted sucessfully"
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
  getAllBooksByLoanCode,
  create,
  update,
  destroy
}