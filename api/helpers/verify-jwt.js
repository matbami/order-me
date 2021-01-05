var jwt = require('jsonwebtoken')
var dotenv = require('dotenv');
dotenv.config();


var tokenSecret = process.env.JWT_TOKEN;

module.exports = {
    friendlyName: 'Verify JWT',
    description: 'Verify a JWT token.',
    inputs: {
        req: {
            type: 'ref',
            friendlyName: 'Request',
            description: 'A reference to the request object (req).',
            required: true
        },
        res: {
            type: 'ref',
            friendlyName: 'Response',
            description: 'A reference to the response object (res).',
            required: false
        }
    },
    exits: {
        invalid: {
            description: 'Invalid token or no authentication present.',
        }
    },
    fn: function (inputs, exits) {
        var req = inputs.req
        var res = inputs.res
        if (req.header('authorization')) {
            // if one exists, attempt to get the header data
            var token = req.header('authorization').split('Bearer ')[1]
            // console.log(token)
            // if there's nothing after "Bearer", no go
            if (!token) return exits.invalid()
            // if there is something, attempt to parse it as a JWT token
            return jwt.verify(token, tokenSecret, async function (err, payload) {
                // console.log(payload)
                if (err || !payload) {

                    return exits.invalid()
                }
                var user = await User.findOne({ id: payload.id })

                if (!user) return exits.invalid()
                // console.log(token)
                // if it got this far, everything checks out, success
                req.user = user
                return exits.success(user)
            })
        }
        // return exits.invalid()
    }
    // Generates a token from supplied payload
    // issue(payload) {
    //     return jwt.sign(
    //         payload,
    //         tokenSecret, // Token Secret that we sign it with
    //         {
    //             expiresIn: "30 days" // Token Expire time
    //         });
    // },

    // // Verifies token on a request
    // verify(token, callback) {
    //     return jwt.verify(
    //         token, // The token to be verified
    //         tokenSecret, // Same token we used to sign
    //         {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    //         callback //Pass errors or decoded token to callback
    //     );
    // }
}