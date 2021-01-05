module.exports = {


  friendlyName: 'Create',


  description: 'Create products.',


  inputs: {
    name: {

      type: 'string'
    },
    price: {
      type: 'string',
      required: true,
    }

  },


  exits: {

  },


  fn: async function ({ name, price }) {

    const data = this.req.user
    console.log(data)
    if (this.req.user.isAdmin === true) {
      const createProduct = await Products.create({
        name, price
      }).fetch();

      // All done.

      return (createProduct);
    }
    return ("Access denied")


  }


};
