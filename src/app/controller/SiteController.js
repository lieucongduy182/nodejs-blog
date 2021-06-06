const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        // convert object literal
        Course.find()
            .then((course) => {
                res.render('home', {
                    course: multipleMongooseToObject(course),
                });
            })
            .catch((err) => next(err));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
