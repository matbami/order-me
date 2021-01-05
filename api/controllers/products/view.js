module.exports = {


  friendlyName: 'View',


  description: 'View products.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {


    const data = await Products.find()
    return data;


  }


};
