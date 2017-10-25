'use strict'

const mongoose = require('mongoose');
const dataModels = require('./schema.js');

exports.dbModels = {
    users : dataModels.user(),
    session : dataModels.session()
};

// console.log(dataModels);

// module.exports = dbModels;