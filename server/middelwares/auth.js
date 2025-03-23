const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Authentication failed , Token missing" });
    }

    try {
        const decoded = jwt.verify(token, 'secret_key');
        req.user = { _id: decoded.userId };
        next();
    } catch (err) {
        res.status(500).json({ message: 'Authentication failed. Invalid token.' });
    }
};

module.exports = auth;