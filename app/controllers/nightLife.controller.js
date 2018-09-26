const nightLifeService = require("../services/nightLife.service");

module.exports = {
  postVenue: (req, res) => {
    const { name, address, url, category } = req.body;

    nightLifeService
      .postVenue(name, address, url, category)
      .then(Id => {
        res.status(201).json(Id);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
