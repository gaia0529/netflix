import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mustacheExpress from "mustache-express";
import ejs from "ejs";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view 경로 설정
app.engine("html", ejs.renderFile);
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

// 기본 path를 /static 설정(css, javascript 등의 파일 사용을 위해)
app.use("/static", express.static(__dirname + "/static"));
app.use("/assets", express.static(__dirname + "/assets"));

app.use(routes.home, globalRouter);

export default app;
