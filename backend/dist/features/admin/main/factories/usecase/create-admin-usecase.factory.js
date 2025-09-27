"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminFactory = void 0;
const create_admin_usecase_1 = require("../../../domain/usecase/create-admin.usecase");
const admin_repository_1 = require("../../../repository/admin.repository");
const createAdminFactory = () => {
    const repo = new admin_repository_1.AdminRepository();
    return new create_admin_usecase_1.CreateAdminUsecase(repo);
};
exports.createAdminFactory = createAdminFactory;
