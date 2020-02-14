"use strict";
exports.__esModule = true;
var http_errors_1 = require("http-errors");
var express_1 = require("express");
var path_1 = require("path");
// import logger from "morgan";
// var cookieParser = require('cookie-parser');
var logger = require("morgan");
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
var app = express_1["default"]();
// view engine setup
app.set("views", path_1["default"].join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express_1["default"].static(path_1["default"].join(__dirname, "public")));
app.use("/", index_1["default"]);
app.use("/users", users_1["default"]);
// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(http_errors_1["default"](404));
});
// error handler
app.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
exports["default"] = app;
