import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export const PortfolioData = mongoose.model("PortfolioData", DataSchema);
