import Organisme from "../models/Organisme";
import CreateError from "../utils/Error";

export  const addOrganisme = async (req, res, next) => {
  const { name, email, address, domaine } = req.body;

  const newOrganisme = {
    name,
    email,
    address,
    domaine,
  };
  Object.values(newProduct).every((value) => {
    if (!value) {
      return next(CreateError("Please fill all the fields"));
    }
  });

  try {
    const organisme = await Organisme.create(newOrganisme);
    if (!organisme)
      return next(CreateError("Problem in adding new organisme", 502));
    res.status(201).json("new organisme was added ");
  } catch (error) {
    next(error);
  }
};
