
const express = require('express');
const Projects = require("./model");

const router = express.Router();

router.get("/", (_,res, next) => {
    Projects.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => next(err))
}); 

module.exports = router;
