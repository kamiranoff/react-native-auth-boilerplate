const isValidEmail = (email: string) => {
  // tslint:disable-next-line:max-line-length
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reg.test(email);
};

const validatePassword = (password: string) => {
  let errors: string[] = [];

  if (password.length < 8) {
    errors.push('Your password must be at least 8 characters');
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push('Your password must contain at least one letter.');
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push('Your password must contain at least one digit.');
  }

  return errors;
};

const areValuesIdentical = (a: string, b: string) => {
  return a === b;
};

export {
  isValidEmail,
  validatePassword,
  areValuesIdentical,
};
