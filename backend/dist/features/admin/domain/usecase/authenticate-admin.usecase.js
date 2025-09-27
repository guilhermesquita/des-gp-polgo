"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAdminUsecase = void 0;
class AuthenticateAdminUsecase {
    constructor(authenticateAdmin) {
        this.authenticateAdmin = authenticateAdmin;
    }
    async authenticate(params) {
        return await this.authenticateAdmin.authenticate(params);
    }
}
exports.AuthenticateAdminUsecase = AuthenticateAdminUsecase;
