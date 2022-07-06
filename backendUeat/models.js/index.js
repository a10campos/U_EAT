const users = require('../example.json');
const underscore = require("underscore");

exports.searchUser = (email) => {
    underscore.each(users,(OneUser,i) => {
        if(email == OneUser.email){
            return OneUser;
        }
        return null;
    })
}