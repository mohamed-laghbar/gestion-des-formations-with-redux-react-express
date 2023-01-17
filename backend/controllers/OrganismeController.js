import Organisme from "../models/Organisme.js";
import CreateError from "../utils/Error.js";

export const addOrganisme = async (req, res, next) => {
  const { name, ville, address, domaine } = req.body;
  try {
    const newOrganisme = {
      name,
      ville,
      address,
      domaine,
    };
    Object.values(newOrganisme).every((value) => {
      if (!value) {
        return next(CreateError("Please fill all the fields"));
      }
    });

    const organisme = await Organisme.create(newOrganisme);
    if (!organisme)
      return next(CreateError("Problem in adding new organisme", 502));
    return res.status(201).json("new organisme was added ");
  } catch (error) {
    next(error);
  }
};

export const getAllOrganismes = async (req, res, next) => {
  try {
    const organismes = await Organisme.find();

    if (!organismes) return next(CreateError("No organisme foud", 502));
    return res.status(200).json(organismes);
  } catch (error) {
    next(error);
  }
};
