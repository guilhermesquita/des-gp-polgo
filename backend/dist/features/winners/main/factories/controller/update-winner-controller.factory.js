"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateWinnerController = void 0;
const update_winner_controller_1 = require("../../../controllers/update-winner.controller");
const update_winner_usecase_factory_1 = require("../usecase/update-winner-usecase.factory");
const makeUpdateWinnerController = () => {
    return new update_winner_controller_1.UpdateWinnerController((0, update_winner_usecase_factory_1.updateWinnerFactory)());
};
exports.makeUpdateWinnerController = makeUpdateWinnerController;
