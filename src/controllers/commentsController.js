import z, { ZodError } from "zod";
import { PrismaClient } from "@prisma/client";

const commentsModel = z.object({
  comentario: z.string().max(500).min(20),
});

const prisma = new PrismaClient();

export const createComment = async function (req, res) {
  try {
    const validadeComments = commentsModel.parse(req.body);
    const creadComments = await prisma.comentarios.create({
      data: {
        ...validadeComments,
      },
    });
    return res.status(200).json(creadComments);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues);
    }
    return res.status(400).json({
      message: "error",
    });
  }
};

export const showComments = async function (req, res) {
  try {
    const comments = await prisma.comentarios.findMany();
    return res.status(200).json(comments);

  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
