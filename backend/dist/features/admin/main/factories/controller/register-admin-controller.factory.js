"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterAdminController = void 0;
const register_admin_controller_1 = require("../../../controllers/register-admin.controller");
const create_admin_usecase_factory_1 = require("../usecase/create-admin-usecase.factory");
const makeRegisterAdminController = () => {
    return new register_admin_controller_1.RegisterAdminController((0, create_admin_usecase_factory_1.createAdminFactory)());
};
exports.makeRegisterAdminController = makeRegisterAdminController;
