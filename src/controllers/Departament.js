const { Departament } = require('../models/Departament');

const getAll = async (req, res) => {
  try {
    const data = await Departament.findAll();
    
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
    const data = await Departament.findOne({
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
    const departament = req.body;
    const data = await Departament.create(departament);
    const { code } = data;
    
    const findDataIfExists = await Departament.findOne({
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
    const departament = req.body;
    const data = await Departament.update(departament, {
      where: {
        code
      }
    });

    const findDataIfExists = await Departament.findOne({
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
    const data = await Departament.destroy({
      where: {
        code
      }
    });

    const findDataIfExists = await Departament.findOne({
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
  create,
  update,
  destroy
}