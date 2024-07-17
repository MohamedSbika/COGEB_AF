import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    area: {
      required: true,
      type: Number,
    },
    price: {
      required: true,
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    furnished: {
      required: true,
      type: Boolean,
    },
    parking: {
      required: true,
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    etat: {
      type: String,
      enum: ['not started', 'en cours', 'terminee'],
      default: 'not started',
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model("Project", ProjectSchema);

export default Projects;
