import express from "express";
import router from './routes'


export const app = express();

app.use(express.json());
app.use('/tacos', router)
app.get('/', (req, res) =>{
  res.json("Servidor online :D")
})
app.listen(3000);