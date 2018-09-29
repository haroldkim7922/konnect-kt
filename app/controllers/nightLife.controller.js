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
  },
  updateVenue: (req, res) => {
    const { name, address, url, category } = req.body;
    const { id } = req.params;

    nightLifeService
      .updateVenue(name, address, url, category, id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        return err;
      });
  },

  getAll: (req, res) => {
    nightLifeService
      .getAll()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        return err;
      });
  },

  deleteVenue: (req, res) => {
    const { id } = req.params;
    nightLifeService
      .deleteVenue(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        return err;
      });
  }
};

postVenue, getAll, updateVenue, deleteVenue;
