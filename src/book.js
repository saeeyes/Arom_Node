import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  Title: { type: String, require: true, unique: true },
  publisher: { type: String, require: true },
});

const BookModel = mongoose.model("Book", BookSchema);

export { BookModel, BookSchema };
