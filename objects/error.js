let Error = class{
  constructor(msg) {
    this.message = msg ? msg : "error";
  }
}

module.exports = Error
