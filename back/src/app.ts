import cors from "cors";
import express from "express";
import helmet from "helmet";

import { PORT, connectDB } from "./config";
import { authRouter, userRouter, articleRouter, orderRouter } from "./routes";
import { apiErrorHandling } from "./errors";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/articles", articleRouter);
app.use("/orders", orderRouter);
app.use(apiErrorHandling);

app.listen(PORT || 5000, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
