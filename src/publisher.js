import mongoose from "mongoose";

const PublisherSchema = new mongoose.Schema({
  PublisherName: { type: String, require: true},
  PublicationTitle: { type: [String] },
});

const PublisherModel = mongoose.model("Publisher", PublisherSchema);

export { PublisherModel, PublisherSchema };
