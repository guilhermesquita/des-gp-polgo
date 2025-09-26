"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetWinnersPageableController = void 0;
const get_winners_pageable_controller_1 = require("../../../controllers/get-winners-pageable.controller");
const get_winners_pageable_usecase_factory_1 = require("../usecase/get-winners-pageable-usecase.factory");
const get_winners_pageable_validation_factory_1 = require("./get-winners-pageable-validation.factory");
const makeGetWinnersPageableController = () => {
    return new get_winners_pageable_controller_1.GetWinnerController((0, get_winners_pageable_usecase_factory_1.getWinnersPageableFactory)(), (0, get_winners_pageable_validation_factory_1.makeGetWinnersPageableValidation)());
};
exports.makeGetWinnersPageableController = makeGetWinnersPageableController;
