const findAllTypes = require("../../controllers/typesControllers/typesControllers");

const getAlltypes = async (req, res) => {
  try {
    const alltypes = await findAllTypes();
    res.status(200).json({ alltypes });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAlltypes;
