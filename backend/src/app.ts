import express from "express";
import cors from "cors";
import morgan from "morgan";
import winnersRouter from "./features/winners/routes/winners.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/winners/", winnersRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_req, res) => res.json({ ok: true }));

// global error handler
app.use(errorHandler);

export default app;
