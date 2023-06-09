import {
  createComment,
  showComments,
  deleteComment,
  getCommentById,
  updateComment,
} from "../controllers/commentsController.js";
import { Router } from "express";

export const commentsRoutes = Router();

commentsRoutes.route("/").post(createComment).get(showComments);

commentsRoutes
  .route("/:id")
  .delete(deleteComment)
  .get(getCommentById)
  .put(updateComment);
