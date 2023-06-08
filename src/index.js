import express from "express";
import { commentsRoutes } from "./routes/commentsRoutes.js";

const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log('servidor activo');
});

app.get('/', (req, res)=>{
res.send('servidor de rodri');
})


app.use('/api/comments', commentsRoutes);
