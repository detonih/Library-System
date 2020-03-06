const { User } = require('../models/User');

const getAll = async (req, res) => {
  try {
    const data = await User.findAll();
    
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
    const { registry } = req.params
    const data = await User.findOne({
        where: {
            registry
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
    const data = await User.create(req.body);

    res.status(201).json(data);
  } catch (err) {
      console.log(err)
  }
}

const update = async (req, res) => {
  try {
    const { registry } = req.params;
    const user = req.body;
    const data = await User.update(user, {
      where: {
        registry
      }
    });
    res.status(201).json(await User.findOne({
      where: {
        registry
      }
    }))
  } catch (err) {
    console.log(err)
  }
}

const destroy = async (req, res) => {
  try {
    const { registry } = req.params;
    const data = await User.destroy({
      where: {
        registry
      }
    });

    const findDataIfExists = await User.findOne({
      where: {
        registry
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