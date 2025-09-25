import { Router } from "express";
import { makeGetWinnersPageableController } from "../main/factories/controller/get-winners-pageable-controller.factory";

const router = Router();
const winnerController = makeGetWinnersPageableController();

router.get("/", (req, res) => winnerController.handle(req, res));

export default router;
