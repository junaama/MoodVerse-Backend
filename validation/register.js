const Validator = require('validator')
const isEmpty = require('is-empty')

function validateRegisterInput(data){
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : ""
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //Check for name
  if(Validator.isEmpty(data.username)){
      errors.username = "Name field is required"
  }

  //Check for email
  if(Validator.isEmpty(data.email)){
      errors.email = "Email field is required"
  }else if(!Validator.isEmail(data.email)){
     errors.email = "Email is invalid"
  }

  //Check for password
  if(Validator.isEmpty(data.password)){
      errors.password = "Password field is required"
  }
  if(Validator.isEmpty(data.password2)){
      errors.password2 = "Confirm password field is required"
  }
  if(!Validator.equals(data.password, data.password2)){
      errors.password2 = "Passwords must match"
  }
  return {
      errors,
      isValid: isEmpty(errors)
  }
}
module.exports = validateRegisterInput