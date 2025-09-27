"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminUsecase = void 0;
class CreateAdminUsecase {
    constructor(createAdmin) {
        this.createAdmin = createAdmin;
    }
    async create(params) {
        return await this.createAdmin.create(params);
    }
}
exports.CreateAdminUsecase = CreateAdminUsecase;
