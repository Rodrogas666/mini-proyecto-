import {createComment, showComments} from "../controllers/commentsController.js";
import { Router } from "express";

export const commentsRoutes = Router();

commentsRoutes.route('/').post(createComment).get(showComments)

// commentsRoutes.post('/', createComment);
// commentsRoutes.get('/', showComments);


