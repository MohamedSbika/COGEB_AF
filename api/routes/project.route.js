import express from "express";
import { verifyToken, verifyAdmin } from "../utils/varifyUser.js";
import { 
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
    singleProject,
    getListingProjects,
    getNumberProjects,
    getNumberParkingProjects,

 } from "../controllers/project.controller.js";

const router = express.Router();

router.get("/countParking",getNumberParkingProjects);
router.get("/count", getNumberProjects);
router.post("/", createProject); // Seuls les administrateurs peuvent créer des projets
router.get("/search",getListingProjects);
router.put("/:id",  updateProject); // Seuls les administrateurs peuvent mettre à jour des projets
router.delete("/:id",  deleteProject); // Seuls les administrateurs peuvent supprimer des projets
router.get("/:id",  singleProject); // Tout utilisateur connecté peut voir un projet
router.get("/",  getAllProjects); // Tout utilisateur connecté peut voir tous les projets

export default router;
