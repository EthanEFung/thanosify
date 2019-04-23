
class StringDecimatorService {
  constructor(req) {
    this.req = req;
  }

  /**
   * returns a new string comprising every "n" characters of "string_to_cut"
   * @param {number} n an integer value
   */
  snap(n) {
    const {string_to_cut} = this.req.body;
    if (string_to_cut && string_to_cut.length > 0) {
      let result = '';
      for (let i = n-1, len = string_to_cut.length; i < len; i += n) {
        result += string_to_cut[i];
      }
      return result;
    }
  }
}

module.exports = StringDecimatorService;