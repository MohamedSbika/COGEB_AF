import Listing from "../models/listing.models.js";
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
export const createPost = async (req, res, next) => {
  /*if (req.user.role === "user") {
    return next(throwError(403, "role is user"));
  }  if (req.user.role !== "admin") {
    return next(throwError(403, "Only admins can create posts"));
  }

  if (req.user.id !== req.body.userRef) {
    return next(throwError(400, "Token Expired, Login to create post"));
  }*/

  try {
    const post = await Listing.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};
//======handle post Delete========//
export const deletePost = async (req, res, next) => {
  const isPostExist = await Listing.findById(req.params.id);

  if (!isPostExist) return next(throwError(404, "Post not found"));

  /*if (req.user.id != isPostExist.userRef)
    return next(throwError(400, "You can delete your own post"));*/

  try {
    await Listing.findByIdAndDelete(req.params.id);

    res.status(200).json("Post delete successfully");
  } catch (error) {
    next(error);
  }
};

//===== Handle Post Update ======//
export const updatePost = async (req, res, next) => {
  const isPostExist = await Listing.findById(req.params.id);
  if (!isPostExist) return next(throwError(404, "Post not found"));
  /*if (req.user.id != isPostExist.userRef)
    return next(throwError(400, "You can only update  your own account"));*/
  try {
    const updatedPost = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single Post ====//
export const singlePost = async (req, res, next) => {
  try {
    const post = await Listing.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

//====GET LISTING Post ====//

export const getListingPost = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm || "";
    const type = req.query.type || "";
    const offer = req.query.offer || "";
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

    if (type !== "all") {
      query.type = type;
    }
    if (offer === "true") {
      query.offer = true;
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

    const listings = await Listing.find(query).skip(skip).limit(limit);

    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
//==== Get All Posts ====//
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Listing.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};


//get posts number

export const getNumberPosts = async (req, res) => {
  try {
    const count = await Listing.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre de posts:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


//get posts parking 

export const getNumberParkingPosts = async (req, res) => {
  try {
    const count = await Listing.countDocuments({ parking: true });
    res.json({ count });
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre de projets avec parking:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};