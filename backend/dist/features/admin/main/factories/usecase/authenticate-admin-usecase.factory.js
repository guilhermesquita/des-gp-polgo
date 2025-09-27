"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdminFactory = void 0;
const authenticate_admin_usecase_1 = require("../../../domain/usecase/authenticate-admin.usecase");
const admin_repository_1 = require("../../../repository/admin.repository");
const authenticateAdminFactory = () => {
    const repo = new admin_repository_1.AdminRepository();
    return new authenticate_admin_usecase_1.AuthenticateAdminUsecase(repo);
};
exports.authenticateAdminFactory = authenticateAdminFactory;
