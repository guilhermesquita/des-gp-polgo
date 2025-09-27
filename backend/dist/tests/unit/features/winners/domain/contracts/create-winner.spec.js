"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("CreateWinner Usecase", () => {
    let createWinner;
    (0, globals_1.beforeEach)(() => {
        createWinner = {
            create: async (params) => {
                if (!params.nome) {
                    return { sucess: false, message: "Nome é obrigatório" };
                }
                return { sucess: true, message: "Winner criado com sucesso" };
            },
        };
    });
    (0, globals_1.it)("deve criar um vencedor com sucesso quando todos os campos são válidos", async () => {
        const params = {
            nome: "Juliano",
            estado: "RJ",
            cidade: "Rio de Janeiro",
            premio: "Carro",
            data: new Date(),
        };
        const result = await createWinner.create(params);
        (0, globals_1.expect)(result.sucess).toBe(true);
        (0, globals_1.expect)(result.message).toBe("Winner criado com sucesso");
    });
    (0, globals_1.it)("deve retornar erro se o nome não for informado", async () => {
        const params = {
            nome: "",
            estado: "RJ",
            cidade: "Rio de Janeiro",
            premio: "Carro",
            data: new Date(),
        };
        const result = await createWinner.create(params);
        (0, globals_1.expect)(result.sucess).toBe(false);
        (0, globals_1.expect)(result.message).toBe("Nome é obrigatório");
    });
});
