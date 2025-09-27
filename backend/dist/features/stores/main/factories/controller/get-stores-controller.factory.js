"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetStoresController = void 0;
const get_stores_controller_1 = require("../../../controllers/get-stores.controller");
const get_stores_usecase_factory_1 = require("../usecase/get-stores-usecase.factory");
const get_stores_pageable_validation_factory_1 = require("../controller/get-stores-pageable-validation.factory");
const makeGetStoresController = () => {
    return new get_stores_controller_1.GetStoresController((0, get_stores_usecase_factory_1.getStoresFactory)(), (0, get_stores_pageable_validation_factory_1.makeGetStoresPageableValidation)());
};
exports.makeGetStoresController = makeGetStoresController;
