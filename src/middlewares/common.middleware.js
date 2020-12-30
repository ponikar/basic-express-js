const route = require("express").Router();


exports.getName = (req,res, next,name) => {
    req.name = name;
    next(); // this mandorty field to pass otherwise it's gonna be hanged
};
