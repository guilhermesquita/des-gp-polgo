"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteStoreController = void 0;
const delete_store_controller_1 = require("../../../controllers/delete-store.controller");
const delete_store_usecase_factory_1 = require("../usecase/delete-store-usecase.factory");
const makeDeleteStoreController = () => {
    return new delete_store_controller_1.DeleteStoreController((0, delete_store_usecase_factory_1.deleteStoreFactory)());
};
exports.makeDeleteStoreController = makeDeleteStoreController;
