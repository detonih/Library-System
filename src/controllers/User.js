const { User } = require('../models/User');

const create = (req, res) => {
    try {
        const data = User.create(req.body);

        res.status(2001).json(data);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    create
}