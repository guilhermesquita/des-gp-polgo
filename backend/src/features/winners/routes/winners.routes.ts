import { Router } from "express";
import { makeGetWinnersPageableController } from "../main/factories/controller/get-winners-pageable-controller.factory";
import { makeUpdateWinnerController } from "../main/factories/controller/update-winner-controller.factory";
import { makeDeleteWinnerController } from "../main/factories/controller/delete-winner-controller.factory";
import { makeCreateWinnerController } from "../main/factories/controller/create-winner-controller.factory";

const router = Router();
const getWinnersPageableController = makeGetWinnersPageableController();
const createWinnerController = makeCreateWinnerController();
const updateWinnerController = makeUpdateWinnerController();
const deleteWinnerController = makeDeleteWinnerController();

router.get("/", (req, res, next) =>
  getWinnersPageableController.handle(req, res, next)
);
router.post("/", (req, res, next) =>
  createWinnerController.handle(req, res, next)
);
router.put("/:id", (req, res, next) =>
  updateWinnerController.handle(req, res, next)
);
router.delete("/:id", (req, res, next) =>
  deleteWinnerController.handle(req, res, next)
);

export default router;
