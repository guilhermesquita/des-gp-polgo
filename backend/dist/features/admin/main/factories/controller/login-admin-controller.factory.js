"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginAdminController = void 0;
const login_admin_controller_1 = require("../../../controllers/login-admin.controller");
const authenticate_admin_usecase_factory_1 = require("../usecase/authenticate-admin-usecase.factory");
const makeLoginAdminController = () => {
    return new login_admin_controller_1.LoginAdminController((0, authenticate_admin_usecase_factory_1.authenticateAdminFactory)());
};
exports.makeLoginAdminController = makeLoginAdminController;
