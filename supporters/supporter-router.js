const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Supps = require('./supporter-model.js')

router.post('/register', (req, res) => {
    let supportInfo = req.body;
    const hash = bcrypt.hashSync(supportInfo.password, 10);
    supportInfo.password = hash;

    Supps.add(supportInfo)
        .then(added => {
            res.status(201).json(added)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    Supps.findBy({ email })
        .first()
        .then(login => {
            if (login && bcrypt.compareSync(password, login.password)) {
                const token = getJwtToken(login.email);

                res.status(201).json({
                    message: `Welcome, heres a token!`,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

function getJwtToken(email) {
    const payload = {
        email
    };
    const secret = process.env.JWT_SECRET || "supersecret";
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options);
}

module.exports = router;

