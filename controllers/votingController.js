import CandidateModel from "../models/CandidateModel.js";
import UserModel from "../models/UserModel.js";

const votingConrtrol = async (req, res) => {
  try {
    const { candidateName, userid } = req.body;
    console.log("candidateName", candidateName);
    console.log("userid", userid);

    //db.items.update( { item_id: "I001" },{ $inc: { qty: 10 }});

    let alreadyVoted = await UserModel.findById({ _id: userid });
    if (alreadyVoted.isvoted) {
      return res.send("Already voted");
    }
    const filter = { _id: userid };
    const update = { isvoted: true };

    console.log("FIRST");

    let user1 = await CandidateModel.findOneAndUpdate(
      { name: candidateName },
      { $inc: { votes: 1 } },
      { new: false }
    );
    let saveUser = await user1.save();
    console.log("After user1", user1);
    if (saveUser) {
      let votedUser = await UserModel.findOneAndUpdate(filter, update);
      console.log("votedUser is => ", votedUser);
    }
    console.log("DONE");

    res.status(200).json({ msg: "Successfully voted", CandidateModel });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export default votingConrtrol;
