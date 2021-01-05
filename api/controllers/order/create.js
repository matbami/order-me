module.exports = {


  friendlyName: 'Create',


  description: 'Create order.',


  inputs: {
    name: {
      required: true,
      type: 'string'
    },
    price: {
      type: 'number',
      required: true,
    },
    quantity: {
      type: 'number',
      required: true,
    },
    Products: {
      type: 'ref',
      required: true
    }
  },


  exits: {

    success: {
      description: 'New Order was created successfully.',
      responseType: 'ok'

    },
    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
        'parameters should have been validated/coerced _before_ they were sent.'
    },

  },


  fn: async function ({ name, price, quantity, Products }) {







    const createOrder = await Order.create({
      name, quantity, price, Products
    }).fetch();



    return ({ message: 'you are good' }, createOrder);

  }


};
