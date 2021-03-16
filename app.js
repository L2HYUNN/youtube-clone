import express from "express";
// const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

// function handleListening(){
//     console.log(`Listening on http://localhost:${PORT}`);
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;

