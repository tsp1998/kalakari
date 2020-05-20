const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sizes: [
    {
      type: String,
    },
  ],
  colors: [
    {
      type: String,
    },
  ],
  imageUrls: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);

/*

  colors: {
    type: Array,
    required: true,
    default: [],
  },
  imageUrls: {
    type: Array,
    required: true,
    default: [],
  },
  */
