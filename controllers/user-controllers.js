const { User } = require('../models/User');

const { signToken } = require('../utils/auth');

module.exports = {
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
};
