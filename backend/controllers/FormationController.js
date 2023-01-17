import Formation from "../models/Formation.js";
import CreateError from "../utils/Error.js";

export const addFormation = async (req, res, next) => {
  const { name, descreption, start, end } = req.body;
  try {
    const formation = await Formation.create({ name, descreption, start, end });
    if (!formation) return next(CreateError("Ooops ", 502));
    return res.status(201).json("new formation was added ");
  } catch (error) {
    next(error);
  }
};


export const getAllFormation =async (req, res, next) => {
    try {
        const formation = await Formation.find();
    
        if (!formation) return next(CreateError("No formation foud", 502));
        return res.status(200).json(formation);
      } catch (error) {
        next(error);
      }
};
