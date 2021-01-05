module.exports = {


  friendlyName: 'View',


  description: 'View order.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const id = this.req.params.id
    const data = await Order.findOne({ id }).populate('Products')
    return data;

  }


};
