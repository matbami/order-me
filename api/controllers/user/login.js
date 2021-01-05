const jwToken = require('jsonwebtoken')

var dotenv = require('dotenv');
dotenv.config();
module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    encryptedPassword: {
      type: 'string',

    }

  },


  exits: {

  },


  fn: async function ({ email, password }) {

    const user = await User.findOne({ email })
    const data = _.omit(user, ['password', 'encryptedPassword'])



    // All done.
    return ({ data, token: jwToken.sign({ id: user.id }, process.env.JWT_TOKEN) });
    // return user;


  }


};
