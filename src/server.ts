import express from "express";
import { Router } from "./Routes/route.js";


const app = express();
const PORT = 3333;
app.use(express.json());

app.use("/api", Router);

app.listen(PORT, () => {
    `Server running on port ${PORT}`
});