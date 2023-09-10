import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  settings: {
    type: Object,
    required: false,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
