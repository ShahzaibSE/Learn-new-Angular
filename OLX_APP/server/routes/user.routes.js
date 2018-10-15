'use strict'

const { selectall } = require('./../controllers/user.controller');

exports.userRoutes =  [
    {
        method: 'GET',
        path: "/users",
        handler: selectall
    }
]
