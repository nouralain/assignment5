import './src/config.js';
import express from 'express' 
import bootstrapDB from './src/common/utils/server.js'
import { authRouter } from './src/modules/auth/index.js';
import globalErrorHandler from './src/common/middlewares/error.middleware.js';
import { userRouter } from './src/modules/user/index.js';
import { postRouter } from './src/modules/post/index.js';
import { commentRouter } from './src/modules/comment/index.js';
const app = express()

app.use(express.json())
bootstrapDB(app)
app.use("/auth",authRouter)
app.use("/users",userRouter)
app.use("/posts",postRouter)
app.use("/comments",commentRouter)
app.use(globalErrorHandler)