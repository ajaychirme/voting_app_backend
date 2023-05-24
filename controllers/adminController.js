import CandidateModel from "../models/CandidateModel.js";

const getCandidates = async (req, res) => {
  try {
    let allCandidatesData = await CandidateModel.find({});
    console.log("allCandidatesData",allCandidatesData);
    res.status(200).json(allCandidatesData);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default getCandidates;
