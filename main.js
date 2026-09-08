import './src/config.js';
import express from 'express' 
import bootstrapDB from './src/common/utils/server.js'
import { authRouter } from './src/modules/auth/index.js';
const app = express()

app.use(express.json())
bootstrapDB(app)
app.use("/auth",authRouter)