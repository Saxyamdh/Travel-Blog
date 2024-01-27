const { validationResult } = require('express-validator');

const registerValidation = (fields) => [
 
  fields.FirstName && fields.FirstName !== '' ? null : 'First name is required',
  fields.LastName && fields.LastName !== '' ? null : 'Last name is required',
  fields.Age && parseInt(fields.Age) >= 13 ? null : 'Age must be greater tha 12 ',
  ['Male', 'Female', 'Others'].includes(fields.Gender) ? null : 'Invalid gender',
  fields.userName && fields.userName.length >=2 ? null : 'Username must be at least 2 characters long',
  fields.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ? null : 'Please enter a valid email address',
  fields.password && fields.password.length >= 8 ? null : 'Password must be at least 8 characters long',
].filter((error) => error !== null);

const validateRegister = (fields) => {
  const errors = registerValidation(fields);
  if (errors.length > 0) {
    return false;
  }
  return true;
};

module.exports = {
  validateRegister,
};
