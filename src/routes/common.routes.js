const { getNameByURL } = require("../controllers/Common/common.controller");
const { getName } = require("../middlewares/common.middleware");

const commonRoutes = require("express").Router();


// middleware to fetching param from routes
commonRoutes.param("name", getName);

commonRoutes.get("/name/:name", getNameByURL);

module.exports = commonRoutes;



