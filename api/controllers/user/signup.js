const jwToken = require('jsonwebtoken')
const _ = require('lodash')
var dotenv = require('dotenv');
dotenv.config();
module.exports = {


  friendlyName: 'SignUp',


  description: 'SignUp user.',


  inputs: {
    name: {

      type: 'string'
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    encryptedPassword: {
      type: 'string'
    },
    isAdmin: {
      type: 'boolean',
      defaultsTo: false
    }
  },


  exits: {
    success: {
      description: 'New user account was created successfully.'
    },

  },


  fn: async function ({ name, email, password, encryptedPassword, isAdmin }) {


    const user = await User.create({ name, email, encryptedPassword, password, isAdmin }).fetch();

    const data = _.omit(user, ['password', 'encryptedPassword'])





    // All done.
    return ({ data, token: jwToken.sign({ id: user.id }, process.env.JWT_TOKEN) });
    // return user;

  }


};
