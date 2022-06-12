import { Router } from "express";

import { apiMiddleware } from "../middlewares";
import apiV1Routes from "./v1";

const apiRoutes = Router();

apiRoutes.use(apiMiddleware);
apiRoutes.use("/v1", apiV1Routes);

export default apiRoutes;
