import validator from 'validator';
import React from 'react'
/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
 * See their docs here https://github.com/validatorjs/validator.js
 */

class ValidateFields {
  
  validateName(name){
    if (validator.isEmpty(name)){
      return "Name is required"
    }
    else {
      return false; 
    }
  }

  validateTicker(ticker){
    if (validator.isEmpty(ticker)){
      return "Ticker is required"
    }
    else {
      return false; 
    }
  }

  validateMarket(market){
    const markets = ['NYSE', 'NASDAQ', 'TSX']
  }

  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Email is required';
    } else if (!validator.isEmail(email)) {
      return 'Invalid Email';
    }
    return false;
  }

  validatePassword(password) {
    if (validator.isEmpty(password)) {
      return 'Password is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      return 'Password should be minimum 8 characters';
    }
    return false;
  }
  validateConfirmPassword(password, confirmPassword){
    if (!validator.equals(password , confirmPassword)){
      return "Passwords must match"; 
    }
    else {
      return false;
    }
  }
}



const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };