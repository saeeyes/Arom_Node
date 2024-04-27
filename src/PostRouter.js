import { Router } from "express";
import { PublisherModel } from "./publisher.js";
import { BookModel } from "./book.js";

const PostRouter = Router();

PostRouter.post("/publisher", async (req, res) => {
  const data = {
    PublisherName: req.body.name,
  };

  const result = await PublisherModel.create(data);
  res.json({
    message: "성공적으로 생성되었습니다.",
    data: result.PublisherName
  });
});

PostRouter.post("/book", async (req, res) => {
  const data = {
    Title: req.body.title,
    publisher: req.body.publisher,
  };

  const result = await BookModel.create(data);

  const publisher = await PublisherModel.findOne({
    PublisherName: data.publisher
  });
  publisher.PublicationTitle.push(data.Title);
  await publisher.save();

  res.json({
    message: "성공적으로 생성되었습니다.",
    data: data.Title,
  });
});

PostRouter.get("/:publisher", async (req, res) => {
  const FindPublisher = await PublisherModel.findOne({
    PublisherName: req.params.publisher,
  });
  res.json({
    message: req.params.publisher + " 출판사의 책입니다.",
    data: FindPublisher.PublicationTitle,
  });
});
export default PostRouter;
