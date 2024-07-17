import Projects from "../models/project.model.js";
import { throwError } from "../utils/error.js";

// export const createPost = async (req, res, next) => {
//   if (req.user.id != req.body.userRef)
//     return next(throwError(400, "Token Expired, Login for create post"));
//   try {
//     const post = await Listing.create(req.body);
//     res.status(201).json(post);
//   } catch (error) {
//     next(error);
//   }
// };
//===== Create Post =====//
export const createProject = async (req, res, next) => {
  /*if (req.user.role !== "admin") {
    return next(throwError(403, "Only admins can create projects"));
  }

  if (req.user.id !== req.body.userRef) {
    return next(throwError(400, "Token Expired, Login to create project"));
  }*/

  try {
    const post = await Projects.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};
//======handle post Delete========//
export const deleteProject = async (req, res, next) => {
  const isProjectExist = await Projects.findById(req.params.id);

  if (!isProjectExist) return next(throwError(404, "Project not found"));

  /*if (req.user.id != isProjectExist.userRef)
    return next(throwError(400, "You can delete your own project"));*/

  try {
    await Projects.findByIdAndDelete(req.params.id);

    res.status(200).json("Project delete successfully");
  } catch (error) {
    next(error);
  }
};

//===== Handle Project Update ======//
export const updateProject = async (req, res, next) => {
  const isProjectExist = await Projects.findById(req.params.id);
  if (!isProjectExist) return next(throwError(404, "Projectt not found"));
  /*if (req.user.id != isProjectExist.userRef)
    return next(throwError(400, "You can only update  your own account"));*/
  try {
    const updateProject = await Projects.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateProject);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single Project ====//
export const singleProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

//====GET LISTING Project ====//

export const getListingProjects = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm || "";
    const etat = req.query.etat || "";
    const parking = req.query.parking || "";
    const furnished = req.query.furnished || "";
    const page = req.query.page || 1;

    const query = {
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { address: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    };

    if (etat !== "all") {
      query.etat = etat;
    }
    if (parking === "true") {
      query.parking = true;
    }
    if (furnished === "true") {
      query.furnished = true;
    }

    const limit = 12;
    const pageNumber = parseInt(page);

    const skip = (pageNumber - 1) * limit;

    const projects = await Projects.find(query).skip(skip).limit(limit);

    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};
//==== Get All Projects ====//
export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};


// get projects number 

export const getNumberProjects = async (req, res) => {
  try {
    const count = await Projects.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre de posts:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// get projects parking  
export const getNumberParkingProjects = async (req, res) => {
  try {
    const count = await Projects.countDocuments({ parking: true });
    res.json({ count });
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre de projets avec parking:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};