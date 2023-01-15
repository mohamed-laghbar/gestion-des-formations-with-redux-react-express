function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  
  function validatePassword(p) {
    if (p.trim().length < 2) {
      return false;
    }
  
    return true;
  }
  

  
  export { ValidateEmail, validatePassword };
  