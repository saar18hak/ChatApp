var User = require("../models/userModel");

module.exports = async (req, res, next) => {
    try {
        if (!req.session.user || !req.session.user.email) {
            return res.status(403).send("Forbidden: Admins only");
        }
        const user = await User.findOne({ email: req.session.user.email });
        if (!user || !user.isAdmin) {
            return res.status(403).send("Forbidden: Admins only");
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};
