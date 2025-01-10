import express from 'express';
import { index } from '../controller/index.js';
import userRouter from './user/userRouter.js';
import authRouter from './auth/authRouter.js';
import paymentRouter from './payment/paymentRouter.js';
import videoRouter from './video/videoRouter.js';
import { getComments } from '../controller/video/videoController.js';
import storeRouter from './store/storeRouter.js';

const rootRouter = express.Router();

rootRouter.get("/", index)
rootRouter.use("/users", userRouter)
rootRouter.use("/auth", authRouter)
rootRouter.use("/payment", paymentRouter)
rootRouter.use("/videos", videoRouter)
rootRouter.use("/stores", storeRouter)

export default rootRouter;