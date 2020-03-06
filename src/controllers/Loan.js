const { Loan } = require('../models/Loan');

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

const create = async (req, res) => {
  try {
    const data = await Loan.create(req.body);

    res.status(201).json(data);
  } catch (err) {
      console.log(err)
  }
}

const update = async (req, res) => {
  try {
    const { code } = req.params;
    const user = req.body;
    const data = await Loan.update(user, {
      where: {
        code
      }
    });
    res.status(201).json(await Loan.findOne({
      where: {
        code
      }
    }))
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
    
    // if data is null means user was deleted
    if(findDataIfExists === null) {
      res.status(200).send({
        message: "User deleted sucessfully"
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