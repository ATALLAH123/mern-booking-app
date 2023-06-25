const router = express.Router();
import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailibility,
} from "../controllers/roomController.js";

import { verifyAdmin } from "../utils/verifyToken.js";


//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailibility);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);







export default router; 