module.exports = {


    friendlyName: 'View',


    description: 'View products.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {


        const id = this.req.params.id
        const data = await Products.findOne({ id })
        return data;


    }


};
