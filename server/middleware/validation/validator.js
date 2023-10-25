const validator = require('validator')

const signup = async (value) => {
    const validationRule = {
        "email": "required|string|email",
        "username": "required|string",
        "phone": "required|string",
        "password": "required|string|min:6|confirmed",
        "gender": "string"
    };

    await validator(value, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    signup
};