const jwt = require('jsonwebtoken');

exports.EncodeToken = (email) => {

    let KEY = "123-ABC-XYZ";
    let EXPIRE = { expiresIn: '24h' };
    let PAYLOAD = { email: email }
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
}

exports.DecodeToken = (token) => {
    try {
        let KEY = "123-ABC-XYZ";
        let expire = { expiresIn: '24h' };
        let decoded = jwt.verify(token, KEY);


        // Refresh token add
        if (!!decoded.email === true) {
            let RefreshToken = jwt.sign({ email: decoded.email }, key, { expiresIn: expire })
            return { RefreshToken, email: decoded.email };
        }
    }
    catch (e) {
        return null
    }
}