import express from "express";
import votingController from '../controllers/votingController.js'
import adminController from '../controllers/adminController.js'

const router = express.Router();

router.post("/candidate",votingController);
router.get("/admin",adminController);

export default router;

// router.post("/register",registerController);