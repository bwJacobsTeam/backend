const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Orgs = require('./orgs-model.js')

router.post('/register', (req, res) => {
    let org = req.body;
    const hash = bcrypt.hashSync(org.password, 10);
    org.password = hash;

    Orgs.add(org)
        .then(added => {
            res.status(201).json(added)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    Orgs.findBy({ email })
        .first()
        .then(login => {
            if (login && bcrypt.compareSync(password, login.password)) {
                const token = getJwtToken(login.email);

                res.status(201).json({
                    message: `Welcome! Have a token!`,
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
