import { Router } from "express";
import { makeGetWinnersPageableController } from "../main/factories/controller/get-winners-pageable-controller.factory";
import { makeCreateWinnerController } from "../main/factories/controller/create-winner-controller.factory";
import { makeUpdateWinnerController } from "../main/factories/controller/update-winner-controller.factory";
import { makeDeleteWinnerController } from "../main/factories/controller/delete-winner-controller.factory";

const router = Router();
const getWinnersPageableController = makeGetWinnersPageableController();
const createWinnerController = makeCreateWinnerController();
const updateWinnerController = makeUpdateWinnerController();
const deleteWinnerController = makeDeleteWinnerController();

router.get("/", (req, res) => getWinnersPageableController.handle(req, res));
router.post("/", (req, res) => createWinnerController.handle(req, res));
router.put("/:id", (req, res) => updateWinnerController.handle(req, res));
router.delete("/:id", (req, res) => deleteWinnerController.handle(req, res));

export default router;
