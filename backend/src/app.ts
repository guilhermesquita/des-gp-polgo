import express from "express";
import cors from "cors";
import morgan from "morgan";
import winnersRouter from "./features/winners/routes/winners.routes";
import adminRouter from "./features/admin/routes/admin.routes";
import storesRouter from "./features/stores/routes/stores.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/ganhadores/", winnersRouter);
app.use("/api/admin/", adminRouter);
app.use("/api/lojas/", storesRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_req, res) => res.json({ ok: true }));

// global error handler
app.use(errorHandler);

export default app;
