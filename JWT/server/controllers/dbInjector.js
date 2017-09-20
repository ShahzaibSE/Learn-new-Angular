'use strict'

const mongoose = require('mongoose');
const dataModels = require('./schema.js');

var dbModels = {
    users : dataModels.user()
};

module.exports = dbModels;