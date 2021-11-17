import express from "express";
import fs from "fs";
import rootDir from "app-root-path";
import { intervalRequest } from "../modules/intervalRequest";
const app = express();

app.use(express.static(rootDir + "/client/dist"));
const htmlFilePathname = rootDir + "/client/dist/index.html";
let htmlFile = fs.readFileSync(htmlFilePathname, { encoding: "utf-8" });

app.get(/^(?!.*api).+$/, (req, res) => res.status(200).send(htmlFile));

const port = process.env.PORT || 3000;
app.listen(port);

intervalRequest();
