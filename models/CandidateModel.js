import mongoose from "mongoose";

const CandidateSchema = mongoose.Schema({
  name: {
    type: String,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const CandidateModel = mongoose.model("Candidates", CandidateSchema);

export default CandidateModel;
