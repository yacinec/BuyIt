import cors from "cors";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { PORT, connectDB } from "./config";
import authRoutes from "./auth";
import apiRoutes from "./api";
import { apiErrorHandling } from "./errors";

// Api Configuration.
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Route setup.
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);
app.use(apiErrorHandling);

app.listen(PORT || 5000, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
