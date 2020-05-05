const validate = {
  username: (string='') => {
    return RegExp(/[A-Za-z0-9]{5,}/g).test(string)
  },
  password: (string) => {
    return string.length === 8 ? true : false
  }
}

module.exports = validate
