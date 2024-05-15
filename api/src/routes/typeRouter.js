const { Router } = require("express");
const getAlltypes = require("../handlers/typeHandler/getAllType");

const typeRouter = Router();

typeRouter.get("/", getAlltypes);

module.exports = typeRouter;
