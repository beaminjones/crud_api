import { Router, Response, Request } from "express";
import * as clientController from "../controllers/clientController";

const router = Router();

router.get('/ping', (req: Request, res:Response) => {
    return res.status(200).json({pong: true});
});

router.get('/client', clientController.index);
router.post('/search', clientController.search);
router.post('/client', clientController.store);
router.get('/client/:id', clientController.show);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.destroy);

export default router;