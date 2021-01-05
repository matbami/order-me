module.exports = {


  friendlyName: 'Update',


  description: 'Update order.',


  inputs: {
    name: {
      // required: true,
      type: 'string'
    },
    price: {
      type: 'number',
      // required: true,
    },
    quantity: {
      type: 'number',
      // required: true,
    }
  },


  exits: {

  },


  fn: async function ({ name, price, quantity }) {

    const id = this.req.params.id;
    const data = await Order.updateOne({ id }).set({
      name, price, quantity
    })
    return data;

  }


};
