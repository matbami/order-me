module.exports = {


  friendlyName: 'Allview',


  description: 'Allview order.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {


    const data = await Order.find()
    return data;


  }


};
