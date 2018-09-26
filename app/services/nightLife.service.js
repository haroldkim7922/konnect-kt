const mssql = require("../../mssql");
const TYPES = require("tedious").TYPES;

const postVenue = (name, address, url, category) => {
  return mssql
    .executeProc("Venue_Insert", request => {
      request.addParameter("Name", TYPES.NVarChar, name);
      request.addParameter("Address", TYPES.NVarChar, address);
      request.addParameter("Url", TYPES.NVarChar, url);
      request.addParameter("Category", TYPES.NVarChar, category);
      request.addOutputParamter("Id", TYPES.Int, null);
    })
    .then(response => {
      const Id = response.outputParameters.Id;
      return Id;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  postVenue
};
