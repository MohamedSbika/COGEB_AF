// import express from "express";
// import { verifyToken } from "../utils/varifyUser.js";
// import {
//   createPost,
//   deletePost,
//   updatePost,
//   singlePost,
//   getListingPost,
// } from "../controllers/post.controller.js";

// const router = express.Router();

// router.post("/create", verifyToken, createPost);
// router.delete("/delete/:id", verifyToken, deletePost);
// router.post("/update/:id", verifyToken, updatePost);
// router.get("/:id", singlePost);
// router.get("/", getListingPost);


// export default router;
// routes/post.route.js
import express from "express";
import { verifyToken, verifyAdmin } from "../utils/varifyUser.js";
import {
  createPost,
  updatePost,
  deletePost,
  singlePost,
  getListingPost,
  getAllPosts,
  getNumberPosts,
  getNumberParkingPosts, // Assurez-vous que ceci est importé correctement
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/countParking",getNumberParkingPosts)
router.get("/count", getNumberPosts);
router.post("/",  createPost); // Seuls les administrateurs peuvent créer des posts
router.get("/search",getListingPost);
router.put("/:id",  updatePost); // Seuls les administrateurs peuvent mettre à jour des posts
router.delete("/:id",  deletePost); // Seuls les administrateurs peuvent supprimer des posts
router.get("/:id",  singlePost); // Tout utilisateur connecté peut voir un post
router.get("/",  getAllPosts); // Tout utilisateur connecté peut voir tous les posts

export default router;

