'use strict'

const mongoose = require('mongoose');
const dataModels = require('./schema.js');

exports.dbModels = {
    users : dataModels.user(),
};

// console.log(dataModels);

// module.exports = dbModels;