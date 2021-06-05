const Course = require('../models/Course');

class SiteController {
    // [GET] /
    home(req, res) {
        Course.find({}, (err, course) => {
            if (!err) {
                res.json(course);
            } else {
                res.status(400).json({ error: err.message });
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
