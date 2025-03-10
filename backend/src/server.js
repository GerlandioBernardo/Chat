import express from "express";
import cors from "cors";
import route from "./routes/routes.js";

const app = express();
const porta = 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(route);

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta: ${porta}`);
})