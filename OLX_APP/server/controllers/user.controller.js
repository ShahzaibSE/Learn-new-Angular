'use strict'

exports.create = async function(req,res) {

}

exports.selectall = async function(req,h) {
    var userList = [
        {id:1 , name: "Shahzaib"},
        {id:2 , name: "Shaheed"},
        {id:3 , name: "Kevin"},
    ];
    return userList;
}