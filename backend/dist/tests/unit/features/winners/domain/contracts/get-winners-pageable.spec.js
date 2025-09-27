"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("GetWinnersPageable Usecase", () => {
    let getWinnersPageable;
    const mockData = [
        {
            nome: "Maria",
            estado: "SP",
            cidade: "São Paulo",
            premio: "Carro",
            data: new Date(),
        },
        {
            nome: "João",
            estado: "RJ",
            cidade: "Rio de Janeiro",
            premio: "Moto",
            data: new Date(),
        },
        {
            nome: "Ana",
            estado: "AM",
            cidade: "Manaus",
            premio: "Casa",
            data: new Date(),
        },
    ];
    beforeEach(() => {
        getWinnersPageable = {
            pageable: jest.fn(async ({ pageable, filters }) => {
                const { page = 1, limit = 10 } = pageable;
                let filtered = mockData;
                if (filters.nome) {
                    filtered = filtered.filter((w) => w.nome.includes(filters.nome));
                }
                if (filters.estado) {
                    filtered = filtered.filter((w) => w.estado === filters.estado);
                }
                if (filters.premio) {
                    filtered = filtered.filter((w) => w.premio === filters.premio);
                }
                const total = filtered.length;
                const totalPages = Math.ceil(total / limit);
                const start = (page - 1) * limit;
                const end = start + limit;
                const data = filtered.slice(start, end);
                return {
                    data: data,
                    pagination: { totalPages, total, page, limit },
                    sucess: true,
                    message: "Winners fetched successfully",
                };
            }),
        };
    });
    it("deve retornar a primeira página de vencedores", async () => {
        const result = await getWinnersPageable.pageable({
            pageable: { page: 1, limit: 2, order: "asc" },
            filters: {},
        });
        expect(result.data).toHaveLength(2);
        expect(result.pagination.page).toBe(1);
        expect(result.sucess).toBe(true);
    });
    it("deve aplicar filtros corretamente", async () => {
        const result = await getWinnersPageable.pageable({
            pageable: { page: 1, limit: 10, order: "asc" },
            filters: { estado: "SP" },
        });
        expect(result.data).toHaveLength(1);
        expect(result.data[0].nome).toBe("Maria");
    });
    it("deve retornar vazio quando nenhum vencedor corresponde ao filtro", async () => {
        const result = await getWinnersPageable.pageable({
            pageable: { page: 1, limit: 10, order: "asc" },
            filters: { nome: "Inexistente" },
        });
        expect(result.data).toHaveLength(0);
        expect(result.pagination.total).toBe(0);
    });
});
