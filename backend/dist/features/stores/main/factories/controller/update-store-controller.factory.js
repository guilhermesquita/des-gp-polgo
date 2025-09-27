"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStoreController = void 0;
const update_store_controller_1 = require("../../../controllers/update-store.controller");
const update_store_usecase_factory_1 = require("../usecase/update-store-usecase.factory");
const makeUpdateStoreController = () => {
    return new update_store_controller_1.UpdateStoreController((0, update_store_usecase_factory_1.updateStoreFactory)());
};
exports.makeUpdateStoreController = makeUpdateStoreController;
