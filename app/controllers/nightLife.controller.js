const nightLifeService = require("../services/nightLife.service");

module.exports = {
  postVenue: (req, res) => {
    const { name, address, url, category } = req.body;

    nightLifeService
      .postVenue(name, address, url, category)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
