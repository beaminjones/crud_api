import express, {Request, Response} from 'express';
import Routers from "./src/routes/router";
import { json } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

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