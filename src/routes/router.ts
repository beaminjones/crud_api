// routes/clienteRoutes.ts
import { Router, Response, Request } from "express";
import * as clientController from "../controllers/clientController";

const router = Router();

//Test router if start server
router.get('/ping', (req: Request, res:Response) => {
    return res.status(200).json({pong: true});
});

router.get('/client', clientController.index);
router.post('/search', clientController.search);
router.post('/client', clientController.store);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.destroy);

export default router;