"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateWinnerController = void 0;
const create_winner_controller_1 = require("../../../controllers/create-winner.controller");
const create_winner_usecase_factory_1 = require("../usecase/create-winner-usecase.factory");
const makeCreateWinnerController = () => {
    return new create_winner_controller_1.CreateWinnerController((0, create_winner_usecase_factory_1.createWinnerFactory)());
};
exports.makeCreateWinnerController = makeCreateWinnerController;
