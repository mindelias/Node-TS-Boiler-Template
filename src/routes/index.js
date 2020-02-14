"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
/* GET home page. */
router.get('/', function (_req, res, _next) {
    // res.render('index', { title: 'Express' });
    res.send('hello');
});
exports["default"] = router;
