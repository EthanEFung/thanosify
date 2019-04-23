const StringDecimatorService = require('../services/StringDecimatorService');

class StringDecimatorCtrl {
  get(req, res) {
    res.sendStatus(200);
  }
  post(req, res) {
    // should add policy and scoping for service
    const thanosGauntlet = new StringDecimatorService(req);
    const decimatedString = thanosGauntlet.snap(3); // OH NO!
    res.json({return_string : decimatedString});
  }
}

module.exports = StringDecimatorCtrl;
