import cors from "cors";
import express from "express";
import helmet from "helmet";

import { PORT, connectDB } from "./config";
import { authRouter, apiRouter } from "./routes";
import { apiErrorHandling } from "./errors";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/api", apiRouter);
app.use(apiErrorHandling);

app.listen(PORT || 5000, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
