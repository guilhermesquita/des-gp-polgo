"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteWinnerController = void 0;
const delete_winner_controller_1 = require("../../../controllers/delete-winner.controller");
const delete_winner_usecase_factory_1 = require("../usecase/delete-winner-usecase.factory");
const makeDeleteWinnerController = () => {
    return new delete_winner_controller_1.DeleteWinnerController((0, delete_winner_usecase_factory_1.deleteWinnerFactory)());
};
exports.makeDeleteWinnerController = makeDeleteWinnerController;
