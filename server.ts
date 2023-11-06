import express, {Request, Response} from 'express';
import Routers from "./src/routes/router";
import { json } from "body-parser";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(json());
app.use('/api', Routers);

app.use((req: Request, res:Response) => {
  return res.status(404).json({
      error: true, 
      message: 'Endpoint não encontrado, por favor verifique a rota'
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});