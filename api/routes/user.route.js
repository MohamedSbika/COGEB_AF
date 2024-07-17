// import express from "express";
// import {
//   deleteUser,
//   updateUser,
//   getUser,
//   userPosts,
// } from "../controllers/user.controller.js";
// import { verifyToken } from "../utils/varifyUser.js";

// const router = express.Router();

// router.get("/:id",  getUser);
// router.post("/update/:id", verifyToken, updateUser);
// router.delete("/delete/:id", verifyToken, deleteUser);
// router.get("/posts/:id", verifyToken, userPosts);



// export default router;
// routes/user.route.js
import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  userPosts,
  userProjects,
} from "../controllers/user.controller.js";
import { verifyToken, verifyAdmin } from "../utils/varifyUser.js";

const router = express.Router();

// Ces routes nécessitent seulement une vérification de token
router.get("/:id",  getUser);
router.get("/posts/:id",  userPosts);
router.get("/projects/:id",  userProjects);


// Ces routes nécessitent une vérification de token et d'administrateur
router.post("/update/:id",  updateUser);
router.delete("/delete/:id",  deleteUser);

export default router;

