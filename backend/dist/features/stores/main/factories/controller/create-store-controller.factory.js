"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateStoreController = void 0;
const create_store_controller_1 = require("../../../controllers/create-store.controller");
const create_store_usecase_factory_1 = require("../usecase/create-store-usecase.factory");
const makeCreateStoreController = () => {
    return new create_store_controller_1.CreateStoreController((0, create_store_usecase_factory_1.createStoreFactory)());
};
exports.makeCreateStoreController = makeCreateStoreController;
